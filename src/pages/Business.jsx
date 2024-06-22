import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import InfiniteScroll from 'react-infinite-scroll-component';
import API_KEY from '../api';


const Business = () => {
    const [news, setNews] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        getNews();
    }, []);
    const getNews = async () => {

        try {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API_KEY}&page=${page}&limit=10`;
            const response = await fetch(url);
            const data = await response.json();
            const newsData = data.articles;
            const filteredArticles = newsData.filter(article => article.author !== null);

            setNews((prevItems) => [...prevItems, ...filteredArticles]);
            if (data.length === 0) {
                setHasMore(false);
            } else {
                setPage((prevPage) => prevPage + 1);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100 mx-10">
                    <InfiniteScroll
                        dataLength={news.length}
                        next={getNews}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={<p>No more data to load</p>}
                    >
                        {
                            news.map((item, idx) => {
                                return <div key={idx} className="py-8 flex flex-wrap md:flex-nowrap">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold title-font text-teal-500">{item.author}</span>
                                        <span className="mt-1 text-teal-800 text-sm">
                                            {new Date(item.publishedAt).toLocaleDateString()}
                                        </span>
                                        <span className="mt-1 text-teal-800 text-sm">
                                            {new Date(item.publishedAt).toLocaleTimeString()}
                                        </span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-teal-500 title-font mb-2 ">{item.title}</h2>
                                        {
                                            item.description !== null ? <p className="leading-relaxed">{item.description}</p> : <p className="leading-relaxed">No description available</p>
                                        }

                                        <Link to={item.url} className="text-teal-700 flex flex-row items-center mt-4 justify-start"><p>Read More</p> <ArrowRightAltIcon className='text-teal-700 mx-1' />
                                        </Link>
                                    </div>
                                </div>
                            })
                        }
                    </InfiniteScroll>
                </div>
            </div>
        </section>
    )
}

export default Business;