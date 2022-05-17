import { useEffect, useState } from "react";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);

  if (!sales) {
    return <p>No data yet...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          <p>{`${sale.username}: $${sale.volume}`}</p>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://nextjs-course-5c4ff-default-rtdb.firebaseio.com/sales.json")
      const data = await response.json()
      const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

      return {
        props: {
          sales: transformedSales
        }, revalidate: 10
      }
}
export default LastSalesPage;
