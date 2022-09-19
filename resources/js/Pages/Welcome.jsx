import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Header from './Header';
import PromoteMenu from './Components/PromoteMenu';

export default function Welcome(props) {
    return (
        <main>
            <Head title="Welcome" />
            <Header props={props}/>
            <PromoteMenu/>       
        </main>
    );
}
