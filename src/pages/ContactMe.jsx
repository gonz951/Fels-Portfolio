import '../components/styles/pages.css';

export default function ContactPage() {
    return (
        <div className='card'>
         <h2>Contact Me</h2>
         <p>
            <form className='contact'>
                <label>Name:</label>
                <input placeholder='Enter name'></input>
                <label>Email:</label>
                <input placeholder='Enter email'></input>
                <label>Message:</label>
                <textarea placeholder='Enter a message!'></textarea>
                <button type='submit'>Submit</button>
            </form>
         </p>
        </div>
    );
}