import React,{useState, useEffect} from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen  from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookAddScreen from './screens/BookAddScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import UserRegistrationScreen from './screens/UserRegistrationScreen';
import {books} from './services/book-service';
import {addBooksLocal} from './services/book-storage-service';
import {addUser, addUsers, logInUser} from './services/user-service';


const App=({})=>{

     useEffect(()=>{
          addBooksLocal(allBooks);
     });

     useEffect(()=>{
          addUsers([]);
     },[]);

     const [screen,selectScreen]=useState("BOOK LIST");
     const [allBooks, updateBooks]=useState(books);
     const [book,selectBook]=useState(null);
     const [user, updateUser] = useState(null);

     const handleBookSelect=(book)=>{
          selectBook(book);
          selectScreen("BOOK DETAILS");
     }

     const  handleBookSave=(book)=>{
          updateBooks([...allBooks,book]);
          console.log(allBooks);
          selectScreen("BOOK LIST");
     }

     const handleLogIn=(logInInfo) => {
          const updatedUser = logInUser(logInInfo);
          if (updatedUser) {
               updateUser(updatedUser);
               selectScreen("BOOK LIST");
          }
          else {
               console.log("Wrong Credentials");
          }
     };

     const handleSignUp=(signUpInfo) => {
          addUser(signUpInfo);
          selectScreen("USER LOGIN");
     };

    return <div className="App">
               <AppHeader title="World Wide Books" navigate={selectScreen} currentUser={user}/>
               <div className='Screen'>

                    <BookListScreen books={allBooks} onBookSelect={handleBookSelect}  visibility={screen==="BOOK LIST"}/>                    
                    <BookDetailsScreen book={book} visibility={screen==="BOOK DETAILS"}/>
                    <BookAddScreen onBookSave={handleBookSave} visibility={screen==="BOOK ADD"}/>
                    <UserLoginScreen onLogIn= {handleLogIn} visibility={screen==="USER LOGIN"} />
                    <UserRegistrationScreen onSignUp= {handleSignUp} visibility={screen==="USER REGISTER"}/>
                   
               </div>
               <AppFooter />
            </div>
};

export default App;