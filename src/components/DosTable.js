import React, { useMemo, useState } from "react";
import testsData from "../data/tests.json";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./dos-table.css";

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

const compare = (a, b) => {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;

  if (typeof a === "number" && typeof b === "number") return a - b;
  if (!isNaN(Number(a)) && !isNaN(Number(b)))
    return Number(a) - Number(b);

  return String(a).localeCompare(String(b));
};

export default function DosTable() {
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("code");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    // 1️⃣ Remove invalid rows & header row
    let rows = Array.isArray(testsData)
      ? testsData.filter(
          (r) =>
            r &&
            typeof r === "object" &&
            typeof r.Column1 === "number"
        )
      : [];

    // 2️⃣ Normalize columns
    rows = rows.map((r) => ({
      srNo: r.Column1,
      code: r["SAGEPATH LABS : DIRECTORY OF SERVICES"] || "",
      name: r.Column3 || "",
      sample: r.Column4 || "",
      container: r.Column5 || "",
      method: r.Column6 || "",
      temp: r.Column7 || "",
      schedule: r.Column8 || "",
      reporting: r.Column9 || "",
      mrp: r.Column10 || "",
      clinical: r.Column11 || "",
      department: "-", // not present in PDF
      sampleReportUrl: ""
    }));

    // 3️⃣ Search
    if (q) {
      rows = rows.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(q)
        )
      );
    }

    // 4️⃣ Sort
    rows.sort((a, b) => {
      const res = compare(a[sortKey], b[sortKey]);
      return sortDirection === "asc" ? res : -res;
    });

    return rows;
  }, [search, sortKey, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages - 1);
  const start = currentPage * pageSize;
  const pageRows = filtered.slice(start, start + pageSize);

  const sortIcon = (key) =>
    sortKey !== key ? "↕" : sortDirection === "asc" ? "↑" : "↓";

  return (
    <>
      <Header />

      <section className="dos-section">
        <div className="dos-container">
          <h1 className="dos-title">
            SAGEPATH LABS : DIRECTORY OF SERVICES
          </h1>
        </div>

        {/* Toolbar */}
        <div className="dos-toolbar">
          <label>
            Show{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(0);
              }}
            >
              {PAGE_SIZE_OPTIONS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>{" "}
            entries
          </label>

          <label>
            Search:{" "}
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(0);
              }}
              placeholder="Search test code, name..."
            />
          </label>
        </div>

        {/* Table */}
        <div className="dos-table-wrapper">
          <table className="dos-table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th onClick={() => handleSort("code")}>
                  Test Code {sortIcon("code")}
                </th>
                <th onClick={() => handleSort("name")}>
                  Test Name {sortIcon("name")}
                </th>
                <th>Sample</th>
                <th>Container</th>
                <th>Method</th>
                <th>Temp</th>
                <th>Schedule</th>
                <th>Reporting</th>
                <th>MRP</th>
                <th>Special Instructions</th>
                <th>Department</th>
                <th>Sample Report</th>
              </tr>
            </thead>

            <tbody>
              {pageRows.length === 0 ? (
                <tr>
                  <td colSpan="13" className="dos-empty">
                    No data found
                  </td>
                </tr>
              ) : (
                pageRows.map((row, idx) => (
                  <tr key={`${row.code}-${idx}`}>
                    <td>{row.srNo}</td>
                    <td>{row.code}</td>
                    <td className="dos-test-name">{row.name}</td>
                    <td>{row.sample || "-"}</td>
                    <td>{row.container || "-"}</td>
                    <td>{row.method || "-"}</td>
                    <td>{row.temp || "-"}</td>
                    <td>{row.schedule || "-"}</td>
                    <td>{row.reporting || "-"}</td>
                    <td>{row.mrp || "-"}</td>
                    <td className="dos-clinical">
                      {row.clinical || "-"}
                    </td>
                    <td>{row.department}</td>
                    <td className="dos-dummy">–</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="dos-footer">
          <span>
            Showing {pageRows.length ? start + 1 : 0} to{" "}
            {Math.min(start + pageSize, filtered.length)} of{" "}
            {filtered.length}
          </span>

          <div className="dos-pagination">
            <button onClick={() => setPage(0)} disabled={currentPage === 0}>
              « First
            </button>
            <button
              onClick={() => setPage(currentPage - 1)}
              disabled={currentPage === 0}
            >
              ‹ Prev
            </button>
            <span>
              Page {currentPage + 1} of {totalPages}
            </span>
            <button
              onClick={() => setPage(currentPage + 1)}
              disabled={currentPage >= totalPages - 1}
            >
              Next ›
            </button>
            <button
              onClick={() => setPage(totalPages - 1)}
              disabled={currentPage >= totalPages - 1}
            >
              Last »
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
