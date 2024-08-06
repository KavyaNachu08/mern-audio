import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchComponent.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';


export default function SearchComponent({searchPageRedirect}) {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');

    function navigateToSearchPageHandler() {
        if(searchPageRedirect===true) {
            navigate('/searchPage')
        }
    }

    function inputHandler(event) {
        setSearchValue(() => event.target.value);
        console.log(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();
        setSearchValue(() => '');
    }

    function resultPageHandler(event){
        if(event.key === "Enter") {
            navigate('/results')
        }
    }

    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <label htmlFor="searchInput" className="visually-hidden">Search for Products</label>
            <FontAwesomeIcon className="search-bar__icon" aria-hidden="true" icon={faSearch} />
            <input type="text" id="searchInput" value={searchValue} onChange={inputHandler} onFocus={navigateToSearchPageHandler} onKeyDown={resultPageHandler} placeholder="Search headphone" aria-label='search' aria-autocomplete='list'/>
        </form>
    )
}