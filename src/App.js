import React from 'react';
import './App.css';
import Button from "./Components/Button";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import Product from "./Components/Product";
import Tile from "./Components/Tile";


function App() {
    function clickedButton() {
        console.log('click click!')
    }

    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button isDisabled={false} clickHandler={() => console.log("to the collection")}>to the
                    collection</Button>
                <Button isDisabled={false} clickHandler={() => console.log("to the collection")}>shop all bags</Button>
                <Button isDisabled={true} clickHandler={() => console.log("to the collection")}>pre-orders</Button>
                {/*<button type = "button" onClick={clickedButton}>to the collection</button>*/}
                {/*<button type = "button" onClick={clickedButton}>shop all baggs</button>*/}
                {/*<button disabled={true} type = "button" onClick={clickedButton}>pre-orders</button>*/}
            </nav>
            <main>

                <Product
                    span="Best seller"
                    img={bag1}
                    p="The handy bag"
                    price="€400"

                />
                <Product
                    span="Best seller"
                    img={bag2}
                    p="The Stylish bag"
                    price="€250"

                />
                <Product
                    span="New collection"
                    img={bag3}
                    p="The Simple bag"
                    price="€300"

                />
                <Product
                    span="New collection"
                    img={bag4}
                    p="The Trendy bag"
                    price="€150"

                />
            </main>

            <footer>

                <Tile
                    title="THE BRAND">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequuntur cupiditate,
                        dolores et libero
                        nisi omnis possimus qui quia quibusdam repellendus rerum sapiente suscipit tenetur unde vel vero
                        voluptates!"
                    </p>
                    <p>
                        text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequuntur
                        cupiditate, dolores et libero
                        nisi omnis possimus qui quia quibusdam repellendus rerum sapiente suscipit tenetur unde vel vero
                        voluptates!" </p>

                </Tile>
                <Tile

                    image={brand}

                />

                <Tile
                    image={ourStory}
                />
                <Tile
                    title="OUR STORY">

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequuntur
                        cupiditate" </p>

                </Tile>


            </footer>
        </>
    );
}

export default App;



