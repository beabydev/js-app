import { useEffect, useState } from 'react';
import Nav from '../../component/Navigation/Nav';
import './product.scss';

function Product() {
    let url = 'http://localhost:8888/api/v1/product/laptop';
    const [laptop, setLaptop] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setLaptop(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Nav />
            <div className='Product-container'>
                <div className='nav__product'>
                    <ul className='nav__product--container'>
                        <li className='nav__item nav__item-active'
                        >LAPTOP</li>
                        <li className='nav__item'>IPHONE</li>
                        <li className='nav__item'>SAMSUNG</li>
                        <li className='nav__item'>XIAOMI</li>
                        <li className='nav__item'>OPPO</li>
                        <li className='nav__item'>VIVO</li>
                        <li className='nav__item'>XIAOMI Xách tay</li>
                    </ul>
                </div>
                <div className='laptop'>
                    <ul className='laptop__container'>
                        {laptop.map((product) => {
                            return (
                                <li key={product.id} className='laptop__item'>
                                    <img src={product.img} />
                                    <h3>{product.title}</h3>
                                    <div>
                                        <span>{product.ram}</span>
                                        <span>{product.memory}</span>
                                    </div>
                                    <div>{product.price}</div>
                                    <div>{product.vote}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='height'>

                </div>

            </div >
        </>

    )
}

export default Product;