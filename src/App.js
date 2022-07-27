import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: null,
    cardAttr2: null,
    cardAttr3: null,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    // hasTrunfo: false,
    arrayNovo: [],
  }

  onInputChange = ({ target }) => {
    const { name, value, checked } = target;
    const result = target.type === 'checkbox' ? checked : value;

    this.setState({ [name]: result }, () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
      } = this.state;

      const number = 90;
      const number210 = 210;
      const attr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > number210;

      const buttonIsDisable = cardName.length === 0
        || cardDescription.length === 0
        || cardImage.length === 0
        || cardAttr1 > number
        || cardAttr1 < 0
        || cardAttr2 > number
        || cardAttr2 < 0
        || cardAttr3 > number
        || cardAttr3 < 0;

      const finalValidaBotao = attr || buttonIsDisable;

      this.setState({
        isSaveButtonDisabled: finalValidaBotao,
      });
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const objNovo = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      arrayNovo: [...prevState.arrayNovo, objNovo],
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: false,
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      arrayNovo,
    } = this.state;
    return (
      <div>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        {arrayNovo.map((element) => (
          <div key={ element.cardName }>
            <h1>{element.cardName}</h1>
            <img src={ element.cardImage } alt={ element.cardDescription } />
            <p>
              { element.cardDescription }
            </p>
            <p>{ element.cardAttr1 }</p>
            <p>{ element.cardAttr2 }</p>
            <p>{ element.cardAttr3 }</p>
          </div>
        )) }
      </div>
    );
  }
}

export default App;
