import React, { useState } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { Container, Table, Button } from "react-bootstrap";
import { data } from "../../assets/data.json";
import "./Dashboard.css";

const columns = [
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "Phone",
        accessor: "phone",
    },
];

const dashboard = () => {
    const [searchInput, setSearchInput] = useState("");

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        state: { pageIndex },
        pageCount,
        gotoPage,
        setPageSize,
        rows,
    } = useTable(
        {
            columns,
            data,
        },
        useSortBy,
        usePagination
    );

    const filteredRows = rows.filter(row =>
        row.original.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleNextPage = () => {
        if (pageIndex < pageCount - 1) {
            nextPage();
        }
    };

    const handlePreviousPage = () => {
        if (pageIndex > 0) {
            previousPage();
        }
    };

    return (
        <Container fluid style={{ backgroundColor: 'white' }}>
            <input
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="search-input"
            />
            <Table striped bordered hover {...getTableProps()} className="dashboard-table">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    {column.isSorted && (
                                        <span>{column.isSortedDesc ? " 🔽" : " 🔼"}</span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {filteredRows.map((row) => { // Use filteredRows instead of page
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="btn-container">
                <Button disabled={pageIndex === 0} onClick={() => gotoPage(0)}>
                    First
                </Button>
                <Button disabled={!canPreviousPage} onClick={handlePreviousPage}>
                    Prev
                </Button>
                <span>
                    {pageIndex + 1} of {pageCount}
                </span>
                <Button disabled={!canNextPage} onClick={handleNextPage}>
                    Next
                </Button>
                <Button
                    disabled={pageIndex >= pageCount - 1}
                    onClick={() => gotoPage(pageCount - 1)}
                >
                    Last
                </Button>
            </div>
        </Container>
    );
};

export default dashboard;
