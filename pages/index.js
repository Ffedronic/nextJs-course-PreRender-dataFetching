import path from "path";
import fs from "fs/promises";
import Link from "next/link";
function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}><Link href={`/products/${product.id}`}>{product.title}</Link></li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("regenerating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  //redirect to 404 page
  if (data.products.length === 0) {
    return { notFound: true };
  }

  //redirect to an another page
  if(!data) {
    redirect: {
      destination: "/no-data"
    }
  }

  return {
    props: {
      products: data.products,
    },
    //revalidate the data every 10 seconds
    revalidate: 10
  };
}
export default HomePage;
