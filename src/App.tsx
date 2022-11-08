import "./App.scss";
import Table from "react-bootstrap/Table";
import Navbar from "./components/Navbar/Navbar";
import Container from "react-bootstrap/Container";
import Pagination from "./components/Pagination/Pagination";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "./components/Footer/Footer";
import { useMemo, useRef, useState } from "react";

const data = [
  {
    blockNumber: 12057206,
    transactionId: "0x0f9aa15ef3333333",
    senderAddress: "0x8A2C601f25333333",
    recipientsAddress: "0x12D819E30db2E33333",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057201,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057203,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057204,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057205,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057208,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057209,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057207,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057212,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057213,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
  {
    blockNumber: 12057214,
    transactionId: "0x0f9aa15ef3",
    senderAddress: "0x8A2C601f253",
    recipientsAddress: "0x12D819E30db2E",
    blockConfirmations: 55,
    date: "Mar-17-2021",
    value: 0.011354999999999923,
    transactionFee: 0.007643586,
  },
];

interface Item {
  blockNumber: number;
  transactionId: string;
  senderAddress: string;
  recipientsAddress: string;
  blockConfirmations: number;
  date: string;
  value: number;
  transactionFee: number;
}

function App() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const filterRef = useRef<HTMLSelectElement | null>(null);
  const [filteredData, setFilteredData] = useState<Item[]>(data);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const searchValue = searchRef.current?.value || "";
    const filterValue = filterRef.current?.value || "";

    setFilteredData(
      data.filter((el: any) => el[filterValue].toString() === searchValue)
    );

    setCurrentPage(1);
  };

  const resetHandler = () => {
    setFilteredData(data);

    if (searchRef.current) {
      searchRef.current.value = "";
    }

    if (filterRef.current) {
      filterRef.current.value = "senderAddress";
    }

    setCurrentPage(1);
  };

  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const pages = useMemo(() => {
    const countPages = Math.ceil(filteredData.length / limit);

    const result = [];

    for (let i = 1; i <= countPages; i++) {
      result.push(i);
    }

    return result;
  }, [filteredData, limit]);

  const displayedData = useMemo(() => {
    return filteredData.slice((currentPage - 1) * limit, currentPage * limit);
  }, [currentPage, limit, filteredData]);

  return (
    <>
      <Navbar />
      <Container className="main">
        <Form className="form" onSubmit={submitHandler}>
          <div className="search">
            <Form.Control
              className="form-input"
              size="lg"
              type="text"
              placeholder="Search..."
              ref={searchRef}
            />
            <Form.Select
              className="form-select"
              aria-label="Default select example"
              ref={filterRef}
            >
              <option value="senderAddress">Sender address</option>
              <option value="recipientsAddress">Recipient's address</option>
              <option value="transactionId">Transaction ID</option>
              <option value="blockNumber">Block number</option>
            </Form.Select>
          </div>

          <Button className="search-btn" type="submit">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 6.92313C0 3.10631 3.10351 0 6.92451 0C10.7418 0 13.849 3.1026 13.849 6.92313C13.849 8.42815 13.3664 9.8228 12.5483 10.9597L15.6726 14.0833C16.1076 14.5183 16.1091 15.2281 15.6771 15.6649C15.4538 15.894 15.1591 16 14.8795 16C14.5864 16 14.2988 15.8817 14.0865 15.6695L10.962 12.5457C9.82484 13.3637 8.42986 13.8463 6.92451 13.8463C3.10698 13.8463 0 10.7402 0 6.92313ZM6.92127 2.2472C4.344 2.2472 2.24415 4.3441 2.24415 6.92313C2.24415 9.5027 4.34454 11.6023 6.92127 11.6023C9.5007 11.6023 11.5984 9.49999 11.5984 6.92313C11.5984 4.34681 9.50124 2.2472 6.92127 2.2472Z"
                fill="white"
              />
            </svg>
          </Button>
          <Button className="reset-btn" onClick={resetHandler}>
            Reset
          </Button>
        </Form>

        <div className="App">
          <Table striped bordered hover responsive>
            <thead>
              <tr className="name-col">
                <th>Block number</th>
                <th>Transaction ID</th>
                <th>Sender address</th>
                <th>Recipient's address</th>
                <th>Block confirmations</th>
                <th>Date</th>
                <th>Value</th>
                <th>Transaction Fee</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.length ? (
                displayedData.map((el) => (
                  <tr key={el.blockNumber}>
                    <td>{el.blockNumber}</td>
                    <td>{el.transactionId}</td>
                    <td>{el.senderAddress}</td>
                    <td>{el.recipientsAddress}</td>
                    <td>{el.blockConfirmations}</td>
                    <td>{el.date}</td>
                    <td>{el.value}</td>
                    <td>{el.transactionFee}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8}>Не найдено</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        {pages.length ? (
          <Pagination
            changeCurrentPage={changeCurrentPage}
            pages={pages}
            currentPage={currentPage}
          />
        ) : null}
      </Container>

      <Footer />
    </>
  );
}

export default App;
