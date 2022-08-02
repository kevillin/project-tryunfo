import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <forms>
        <label htmlFor="cardName">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            name="cardName"
            id="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            id="cardDescription"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="ardAttr2">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr2"
            id="ardAttr2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            name="cardImage"
            id="cardImage"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="cardRare"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          Super Trybe Trunfo
          {!hasTrunfo && (<input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            name="cardTrunfo"
            id="cardTrunfo"
            data-testid="trunfo-input"
          />)}
          {hasTrunfo && <>Você já tem um Super Trunfo em seu baralho</>}
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar

        </button>
      </forms>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
