// import React, {useState,useEffect} from 'react';

// const SearchBar = (props) => {
//     const [term,setTerm] = useState('');
//     const handleSearchInput = e => {
//         setTerm(e.target.value);
//     };
//     const onFormSubmit = e => {
//         e.preventDefault();
//         props.onTermSubmit(term);
//     }
//     return(
//        <div>
//            <form onSubmit={onFormSubmit}>
//                <div className="field">
//                    <label> Search Football </label>
//                    <input
//                     type='text'
//                     value={term}
//                     onChange={handleSearchInput}
//                    />
//                </div>
//            </form>   
//        </div>
//     );
// };
// export default SearchBar;