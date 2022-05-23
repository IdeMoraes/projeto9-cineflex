import './style.css';

export default function Footer(props){
    return(
        <footer>
            <div className="chosen-movie-poster">
                <img
                src={props.posterURL} alt="movie poster"
                />
            </div>
            <div className='right'>
                <div className='title'>{props.title}</div>
                <div className='chosen-showtime'>{props.weekday} - {props.showtime}</div>
            </div>
        </footer>
    )
}