import React, { useState } from 'react';

const CreditCardForm = () => {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [isValidCard, setIsValidCard] = useState(false);
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setError('');


    if (
      cardHolderName === '' ||
      cardNumber === '' ||
      expiryMonth === '' ||
      expiryYear === '' ||
      cvc === ''
    ) {
      setError('*Please fill in all fields.*');
      return;
    }


    if (!/^[0-9]{16}$/.test(cardNumber) ||
      !/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(`${expiryMonth}/${expiryYear}`) ||
      !/^[0-9]{3,4}$/.test(cvc)
    ) {
      setError('Invalid card details.');
      return;
    }

    setIsValidCard(true);
  };

  return (
    <>
      <div className='form'>
        <form onSubmit={handleFormSubmit}>
          <div className='form1'>
            <div>
              <label htmlFor="cardHolderName">CARDHOLDER NAME</label>
              <input
                type="text"
                id="cardHolderName"
                required
                placeholder="e.g. Jane Appleseed"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="cardNumber">CARD NUMBER</label>
              <input
                type="text"
                id="cardNumber"
                required
                placeholder='e.g. 1234 5678 9000 0000'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
          </div>
          <div className='b'>
          <label htmlFor="expiryMonth expiryYear">EXPIRY DATE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <label htmlFor="cvc">CVC</label>
          </div>
          <div className='form2'>
           

              
              <div className='form2a'>
              <div>
                <input
                  type="text"
                  required
                  id="expiryMonth"
                  placeholder='MM'
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                />
              </div>
              <div>

                <input
                  type="text"
                  id="expiryYear"
                  required
                  placeholder='YY'
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                />
              </div>
            </div>

            <div className='form2b'>
             
              <input
                type="text"
                id="cvc"
                required
                placeholder='e.g.123'
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
          </div>
          {error && <div style={{ color: "red", fontSize: "16px" }}>{error}</div>}



          <button type="submit" className='btn'>Confirm</button>

          {isValidCard && <div style={{ color: "teal", fontSize: "36px" }}>Card is valid!</div>}
        </form>

      </div>

    </>
  );
};

export default CreditCardForm;
