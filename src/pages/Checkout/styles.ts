import styled from "styled-components";

export const CheckoutContainer = styled.main`
  form {
    display: flex;
    justify-content: space-between;
  }

  .delivery-options {
    max-width: 40rem;
  }

  .card {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;

    & + .card {
      margin-top: 1.5rem;
    }
  }

  .title {
    font-size: "Baloo 2";
    font-weight: 700;
    font-size: ${(props) => props.theme["text-5"]};
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    p {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      color: ${(props) => props.theme["base-text"]};
    }
  }

  .inputGroup {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    input {
      background-color: ${(props) => props.theme["base-input"]};
      border: 1px solid ${(props) => props.theme["base-button"]};
      border-radius: 4px;
      color: ${(props) => props.theme["base-label"]};
      padding: 0.75rem;

      &[name="cep"] {
        max-width: 33%;
      }

      &[name="complement"] {
        width: 100%;
      }

      &[name="neighbordhood"] {
        max-width: 33%;
      }

      &[name="city"] {
        flex: 1;
      }

      &[name="state"] {
        max-width: 10%;
      }
    }

    .multiple {
      display: flex;
      gap: 0.75rem;

      .inputWrapper {
        flex: 1;
        position: relative;

        &::after {
          content: "Opcional";
          display: inline-block;
          position: absolute;
          right: 0.75rem;
          top: 1rem;
          font-style: italic;
          color: ${(props) => props.theme["base-label"]};
          font-size: ${(props) => props.theme["text-2"]};
        }
      }
    }
  }
  .buttonGroup {
    display: flex;
    gap: 0.75rem;
  }

  .cart {
    display: flex;
    flex-direction: column;
    border-radius: 6px 44px;
    gap: 1.5rem;
    width: 28rem;

    .product-row {
      display: flex;
      justify-content: space-between;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid ${(props) => props.theme["base-button"]};

      img {
        height: 4rem;
        width: 4rem;
      }

      p {
        color: ${(props) => props.theme["base-subtitle"]};
      }

      & > span {
        font-weight: 700;
      }

      & > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-right: auto;
        margin-left: 20px;
      }

      div > div {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        height: 2rem;
      }
    }

    button[type="submit"] {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 100%;
      padding: 12px 0;
      background: ${(props) => props.theme["yellow-500"]};
      color: ${(props) => props.theme["white"]};
      border-radius: 6px;
      cursor: pointer;
    }
  }

  .summary {
    table {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      row-gap: 1.5rem;
      width: 100%;

      tr {
        display: flex;
        justify-content: space-between;
      }

      th {
        text-align: left;
      }

      td {
        text-align: right;
      }
    }
  }
`;
