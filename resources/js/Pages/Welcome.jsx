import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Header from './Header';
import PromoteMenu from './Components/PromoteMenu';
import Footer from './Footer';
import { Button,Modal,Box,Typography } from '@mui/material';

const style = {
    position: 'fixed' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Welcome(props) {
    
    const [cartModal,openCartModal] = useState(false);

    const handleToggleCartModal = () =>{
        openCartModal(is => !cartModal);
    }

    return (
        <main>
            <Modal
            open={cartModal}
            onClose={handleToggleCartModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
               <div className='overflow-auto'>
                    facere eum aut quibusdam esse repellendus optio unde similique fuga! Quia modi cumque accusantium dolores adipisci cum cupiditate laborum alias maiores magni dignissimos at, sunt vero itaque qui consectetur doloremque a perferendis possimus totam obcaecati repellat? Nisi harum omnis similique aliquid earum laudantium, perferendis soluta amet necessitatibus expedita. Explicabo placeat odio aperiam fuga pariatur eveniet? Id quae vitae quod nam, deserunt corrupti dicta ab asperiores. Impedit deleniti, unde et architecto ab repellat eaque in perferendis laudantium exercitationem ratione quasi est magni fuga rem quidem consequuntur nobis ex. Obcaecati saepe sint cupiditate quod assumenda praesentium commodi ipsa cum laborum necessitatibus modi magnam nesciunt officiis, quam corporis enim tempore rerum nobis ab illo voluptas qui eligendi quo explicabo. Deserunt illo, ratione unde voluptatum ea hic temporibus maxime voluptatibus doloremque tempore consequatur nulla voluptate quod, aperiam quibusdam aliquid. Hic!
               </div>
            </Box>
            </Modal>
            <Head title="Welcome" />
            <Header props={props} handleToggleCartModal={handleToggleCartModal}/>
            <PromoteMenu/>
            <Footer newsletter={true}/>
        </main>
    );
}
