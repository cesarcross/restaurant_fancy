import styled from "styled-components";

export const FormContainer = styled.div`
  /* border: 2px solid green; */
  margin: 10px auto;
  display: flex;
  max-width: 1300px;

  @media screen and (min-width: 768px) {
    /* justify-content: flex-start; */
  }
`;

// export const ContactImg = styled.div`
//   width: min-content;
//   display: none;

//   img {
//     width: 500px;
//   }

//   @media screen and (min-width: 1200px) {
//     display: block;
//     padding: 50px 20px;
//   }
// `;

export const ContactForm = styled.div`
  width: 80vw;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
    /* color: #fff; */
    color: #d3d3cb;

    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 1.5rem;
    }
  }

  textarea {
    resize: none;
    height: 200px;
  }

  input,
  textarea {
    border: none;
    margin: 20px 0;
    padding: 5px;
    border-radius: 1px;
    /* background: #94999d; */
    background: #ada7a7;

    &:focus {
      /* outline: thin dotted; */
    }

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media screen and (min-width: 1200px) {
      font-size: 1rem;
    }

    ::placeholder {
      /* color: #fff; */
      color: #3b0918;
    }
  }

  input:last-of-type {
    border: none;
    color: #fff;
    /* background: #48214a; */
    background: #900800;
    width: 40%;
    margin: 5px auto;
    height: 40px;
    border-radius: 2px;
    /* font-size: 1.2rem; */
    font-size: 1rem;

    &:hover {
      /* background: #632a66; */
      background: #be0a00;
      transition: all 0.3s ease;
    }
    @media screen and (min-width: 768px) {
      width: 30%;
    }
  }

  @media screen and (min-width: 768px) {
    width: 70%;
    max-width: 540px;
  }

  @media screen and (min-width: 1200px) {
    /* margin: 40px; */
    /* max-width: 540px; */
  }
`;
