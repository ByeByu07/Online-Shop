import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';
import PromoteMenuItem from '../Components/PromoteMenuItem';

export default function Products(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Products</h2>}
        >
            <Head title="Products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex gap-3 flex-wrap">
                  {props.products.length != 0 ? props.products.map((menu,i)=>{
                      return <PromoteMenuItem key={i} menu={menu} shadow={"shadowme1"} admin={true}/>
                  }) : <p className="shadowme1 p-5 w-full">No Products in current tab at this time</p>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
