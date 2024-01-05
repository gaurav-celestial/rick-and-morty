export default function ErrorBlock({ info }) {
  console.log(info);
  return <h3 style={{ textAlign: "center", color: "white" }}>{info}</h3>;
}
