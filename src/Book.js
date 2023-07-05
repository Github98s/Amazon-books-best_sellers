const Book = (props) => {
    const {img,title,author,number } = props;
    const displaytitle = () => {
      alert(title);
    };
   
    return ( 
    <article className='book'>
      <img
      src={img} 
      alt={title}
      />
      <h2>{title}</h2>
      <button onClick={displaytitle}>Display Title</button>
      <br />
      
      <h4>
        {author.toUpperCase()}
        
      </h4>
      <span className="number">{ `# ${ number+1}` }</span>
      
      
    </article>
    );
};

export default Book;