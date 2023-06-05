import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
    FocusableInputWrap,
    Grocery,
    ImageGallery,
    ListItemsForNavigation,
    Message,
    Modal,
    PlayerStatus,
    Rating,
    TeamsList
} from '../../components';
import products from "../../mocks/groceryList.json"
import links from "../../mocks/links.json"
import itemNavigation from "../../mocks/itemsNavigation.json"
import "./styles.css"

export function Main (){

    const [ openModal, setOpenModal ] = useState(true)

    return(
        <section>
            <div>
                <h2>Tests</h2>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Focusable Input</Tab>
                    <Tab>Grocery</Tab>
                    <Tab>Image Gallery</Tab>
                    <Tab>List Items for Navigation</Tab>
                    <Tab>Message</Tab>
                    <Tab>Player Status</Tab>
                    <Tab>Rating</Tab>
                    <Tab>Teams List</Tab>
                </TabList>
                <TabPanel>
                    <FocusableInputWrap/>
                </TabPanel>
                <TabPanel>
                    <Grocery 
                        products={products}/>
                </TabPanel>
                <TabPanel>
                    <ImageGallery 
                        links={links}/>
                </TabPanel>
                <TabPanel>
                    <ListItemsForNavigation 
                        itemsList={itemNavigation}/>
                </TabPanel>
                <TabPanel>
                    <Message/>
                </TabPanel>
                <TabPanel>
                    <PlayerStatus/>
                </TabPanel>
                <TabPanel>
                    <Rating/>
                </TabPanel>
                <TabPanel>
                    <TeamsList/>
                </TabPanel>
            </Tabs>
            {openModal &&
                <Modal handleModalClose={()=> setOpenModal(false)}>
                    <div className='modal-message'>
                        <p>Hi visitor ! Thanks a lot for taking the time to check out this challenge. I would have loved to dive deeper into some stuff, but unfortunately, time has been limited. Haha.{<br/>} I hope you still find it enjoyable! {<br/>} Have a great day! &#128524;</p>
                        <img src='https://media.tenor.com/SGtOwCxuSeUAAAAM/honest-work-good-honest-work.gif' alt='honest-work-gif'></img>
                    </div>
                </Modal>
            }
        </section>
    )
}