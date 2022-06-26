import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id: 13324,
            name: "Ps-5",
            img: "https://m.media-amazon.com/images/I/619BkvKW35L._SX466_.jpg",
            customer: "John Doe",
            date: "1 march 2019",
            amount: 785,
            method: "Cash on delivery",
            status: "approved"

        },
        {
            id: 13325,
            name: "Acer nitro 5",
            img: "https://m.media-amazon.com/images/I/71ojaVMa9qL._AC_SX466_.jpg",
            customer: "John Doe",
            date: "1 march 2019",
            amount: 900,
            method: "Online Payment",
            status: "pending"

        },
        {
            id: 23325,
            name: "Acer Nitro TKL Gaming Keyboard",
            img: "https://m.media-amazon.com/images/I/816jWsjHaaL._AC_SX466_.jpg",
            customer: "John Doe",
            date: "1 march 2019",
            amount: 35,
            method: "Cash on delivery",
            status: "pending"

        },
        {
            id: 43325,
            name: "ASUS ROG Strix Z690-A Gaming",
            img: "https://m.media-amazon.com/images/I/81qmjuAD-UL._AC_SX466_.jpg",
            customer: "John Doe",
            date: "1 march 2019",
            amount: 3500,
            method: "Cash on delivery",
            status: "approved"

        },
        {
            id: 33325,
            name: "Razer Blade 15 Gaming Laptop",
            img: "https://m.media-amazon.com/images/I/61-ODJrgv6L._AC_SX466_.jpg",
            customer: "John Doe",
            date: "1 march 2019",
            amount: 950,
            method: "Cash on delivery",
            status: "approved"

        },
    ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell">
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;