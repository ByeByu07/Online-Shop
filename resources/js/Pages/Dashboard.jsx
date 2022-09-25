import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard Admin</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200 flex justify-between">
                            <div>
                                Welcome Back, <span className='uppercase'>{props.auth.user.name}</span>
                            </div>
                            <button className='btn-sm btn btn-info'>Change Password</button>
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>:</td>
                                        <td className='capitalize'>{props.auth.user.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>:</td>
                                        <td>{props.auth.user.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
