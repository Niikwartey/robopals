import React from 'react';

const Card = ({id, name, username, email}) => {
   return (
     <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
       <img alt={name} src={`https://robohash.org/${id}?200X200`} />
       <div>
         <h1>{username}</h1>
         <p>{email}</p>
       </div>
     </div>
   );
};

export default Card;