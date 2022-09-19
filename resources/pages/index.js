import { Head } from "@inertiajs/inertia-react";

export default function Index(props){
  return <p>
    <Head title="halo dek"></Head>
    {props.name}
  </p>
}