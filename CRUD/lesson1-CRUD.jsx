import { useEffect, useState } from "react"



const Home = () => {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBooks = async() => {
            setIsLoading(true);
            try {
                const data = await getBooks();
                setBooks(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchBooks();
    }, []);

    return (


        {isLoading && <Spinner/>}
    )

}