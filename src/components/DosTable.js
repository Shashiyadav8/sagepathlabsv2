// src/components/DosTable.jsx
import React, { useMemo, useState } from 'react';
import { TEST_ROWS } from './Data/Tests'; // adjust path if needed
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './dos-table.css';

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

const compare = (a, b) => {
  if (a == null && b == null) return 0;
  if (a == null) return -1;
  if (b == null) return 1;
  if (typeof a === 'number' && typeof b === 'number') return a - b;
  // try numeric comparison if strings contain only digits
  if (!isNaN(Number(a)) && !isNaN(Number(b))) return Number(a) - Number(b);
  return String(a).localeCompare(String(b));
};

export default function DosTable() {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [sortKey, setSortKey] = useState('code');
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  // Keys that will be searched (adapted to the actual fields in your tests.json)
  const visibleKeys = [
    'code',
    'department',
    'name',
    'sample',                // "Sample for Analysis & Required volume"
    'container',             // may be empty in JSON, left for future use
    'methodology',           // "Method"
    'temp',
    'schedule',
    'tat',                   // "Reporting"
    'mrp',
    'clinical',              // "Special Instructions"
    'specialtyTests',
    'sampleReportUrl',       // used as Dummy report placeholder
    'dummyReportUrl'         // in case some rows already use this key
  ];

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let rows = TEST_ROWS || [];
    if (q) {
      rows = rows.filter((row) =>
        visibleKeys.some((k) =>
          String(row[k] ?? '').toLowerCase().includes(q)
        )
      );
    }
    const sorted = [...rows].sort((a, b) => {
      const res = compare(a[sortKey], b[sortKey]);
      return sortDirection === 'asc' ? res : -res;
    });
    return sorted;
  }, [search, sortKey, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages - 1);
  const pageStart = currentPage * pageSize;
  const pageRows = filtered.slice(pageStart, pageStart + pageSize);

  const changePageSize = (size) => { setPageSize(size); setPage(0); };
  const goToPage = (p) => { if (p < 0 || p >= totalPages) return; setPage(p); };
  const sortIcon = (key) => (sortKey !== key ? '↕' : (sortDirection === 'asc' ? '↑' : '↓'));

  return (
    <>
      <Header />
      <section className="dos-section">
        {/* Title matching the image */}
        <div className="dos-container">
          <h1 className="dos-title">SAGEPATH LABS : DIRECTORY OF SERVICES</h1>
        </div>

        <div className="dos-toolbar">
          <div className="dos-page-size">
            <label>
              Show{' '}
              <select value={pageSize} onChange={(e) => changePageSize(Number(e.target.value))}>
                {PAGE_SIZE_OPTIONS.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>{' '}
              entries
            </label>
          </div>
          <div className="dos-search">
            <label>
              Search:{' '}
              <input
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(0); }}
                placeholder="Search tests (code, name, department, sample, method...)"
              />
            </label>
          </div>
        </div>

        <div className="dos-table-wrapper">
          <table className="dos-table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th onClick={() => handleSort('code')}>Test Code <span className="sort-icon">{sortIcon('code')}</span></th>
                <th onClick={() => handleSort('name')}>Test Name <span className="sort-icon">{sortIcon('name')}</span></th>

                {/* New header: Sample for Analysis & Required volume */}
                <th onClick={() => handleSort('sample')}>Sample for Analysis &amp;<br/> Required volume <span className="sort-icon">{sortIcon('sample')}</span></th>

                {/* New header: Container for Primary sampling */}
                <th onClick={() => handleSort('container')}>Container for<br/> Primary sampling <span className="sort-icon">{sortIcon('container')}</span></th>

                <th onClick={() => handleSort('methodology')}>Method <span className="sort-icon">{sortIcon('methodology')}</span></th>
                <th onClick={() => handleSort('temp')}>Temp. <span className="sort-icon">{sortIcon('temp')}</span></th>
                <th onClick={() => handleSort('schedule')}>Schedule <span className="sort-icon">{sortIcon('schedule')}</span></th>
                <th onClick={() => handleSort('tat')}>Reporting <span className="sort-icon">{sortIcon('tat')}</span></th>
                <th onClick={() => handleSort('mrp')}>MRP <span className="sort-icon">{sortIcon('mrp')}</span></th>

                {/* Special Instructions */}
                <th onClick={() => handleSort('clinical')}>Special Instructions <span className="sort-icon">{sortIcon('clinical')}</span></th>

                {/* Department (new column) */}
                <th onClick={() => handleSort('department')}>Department <span className="sort-icon">{sortIcon('department')}</span></th>

                {/* Dummy report (new column) */}
                <th>Sample Report</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr><td colSpan={13} className="dos-empty">No tests found.</td></tr>
              ) : pageRows.map((row, idx) => {
                // choose the dummy URL field from available keys
                const dummyUrl = row.dummyReportUrl || row.sampleReportUrl || row.dummyReport || '';
                return (
                  <tr key={row.code + '-' + (pageStart + idx)}>
                    <td>{pageStart + idx + 1}</td>
                    <td>{row.code}</td>
                    <td className="dos-test-name">{row.name}</td>
                    <td>{row.sample ?? '-'}</td>
                    <td>{row.container ?? '-'}</td>
                    <td>{row.methodology ?? '-'}</td>
                    <td>{row.temp ?? '-'}</td>
                    <td>{row.schedule ?? '-'}</td>
                    <td>{row.tat ?? '-'}</td>
                    <td>{row.mrp ?? '-'}</td>
                    <td className="dos-clinical">{row.clinical ?? '-'}</td>
                    <td>{row.department ?? '-'}</td>
                    <td className="dos-dummy">
                      {dummyUrl ? (
                        <a href={dummyUrl} target="_blank" rel="noreferrer" title="Download Report">
                          ⬇
                        </a>
                      ) : (
                        <span className="disabled" title="No report available">–</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="dos-footer">
          <div className="dos-info">
            Showing {pageRows.length === 0 ? 0 : pageStart + 1} to {Math.min(pageStart + pageSize, filtered.length)} of {filtered.length} entries
          </div>
          <div className="dos-pagination">
            <button onClick={() => goToPage(0)} disabled={currentPage === 0}>« First</button>
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 0}>‹ Prev</button>
            <span>Page {currentPage + 1} of {totalPages}</span>
            <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage >= totalPages - 1}>Next ›</button>
            <button onClick={() => goToPage(totalPages - 1)} disabled={currentPage >= totalPages - 1}>Last »</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
