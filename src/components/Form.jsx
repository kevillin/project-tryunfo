import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <forms>
        <label htmlFor="name-input">
          Nome
          <input type="text" name="name-input" id="name-input" data-testid="name-input" />
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea name="" id="" cols="30" rows="10" data-testid="description-input" />
        </label>
        <label htmlFor="attr1-input">
          Attr01
          <input
            type="number"
            name="attr1-input"
            id="attr1-input"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          Attr02
          <input
            type="number"
            name="attr2-input"
            id="attr2-input"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          Attr03
          <input
            type="number"
            name="attr3-input"
            id="attr3-input"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            name="image-input"
            id="image-input"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select name="rare-input" id="rare-input" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfo-input"
            id="trunfo-input"
            data-testid="trunfo-input"
          />
          Super Trybe Trunfo
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </forms>
    );
  }
}
