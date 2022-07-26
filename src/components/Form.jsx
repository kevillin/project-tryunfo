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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <forms>
        <label htmlFor="name-input">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            name="name-input"
            id="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name=""
            id=""
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            type="number"
            name="attr1-input"
            id="attr1-input"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            type="number"
            name="attr2-input"
            id="attr2-input"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            type="number"
            name="attr3-input"
            id="attr3-input"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            name="image-input"
            id="image-input"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="rare-input"
            id="rare-input"
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            name="trunfo-input"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
