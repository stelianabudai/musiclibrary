import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const Edge = styled.div`
    width: 400px;
    height: 500px;
    border: 3px solid gray;
    display: grid;
    grid-template-rows: 6fr 1fr 3fr 2fr 3%;
    font-family: helvetica;
    margin-top: 2%;
    margin: .75rem 0.25rem;
`;

const ImageContainer = styled.img`
    max-width: 100%;
    background: red;
    grid-row-start: 1;
    grid-row-end: 2;
`;

const Heading = styled.h2`
    margin: 0;
    padding-top: 1rem;
    padding-left: 1rem;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const ParagraphDiv = styled.div`
    grid-row-start: 3;
    grid-row-end: 4;
`;

const Description = styled.p`
    margin: 0;
    padding: .5rem 1rem;
    display: flex;
    justify-content: center;
    font-size: .95rem;
`;

const ButtonDiv = styled.div`
    display: flex;
    grid-row-start: 4;
    grid-row-end: 5;
    justify-content: center;
`;

const Button = styled.button`
    border: 1px solid black;
    width: 7rem;
    padding: .5rem 0;
    margin: .5rem 1rem;
`;

const Card = ({app, addTypeId, resetPage}) => {
const history = useHistory();

  
return (
        <div>
            <Edge>
            <ImageContainer  src="https://res.cloudinary.com/dmkct6wfu/image/upload/v1561521301/coliseum-4290893_1920_eqfagn.jpg">
            </ImageContainer>
            <Heading>{app.name} </Heading>
            <ParagraphDiv>
                <Description>
                    {app.desc}
                </Description>
            </ParagraphDiv>
            <ButtonDiv>
                <Button onClick={() => {history.push(`/songs/${app._id}`); addTypeId(app._id); resetPage()} }>View {app.songs ? app.songs.length : 0} Songs</Button>
            </ButtonDiv>
            </Edge>
        </div>
    );
}

const mapStateToProps = ({ initialText, data }) => ({
    initialText,
    data
  });
  
  const mapDispatchToProps = (dispatch) => ({
    addTypeId: (typeId) => dispatch({ type: 'CHANGE_TYPE_ID', typeId }),
    resetPage: () => dispatch({ type: 'RESET_SKIP'}),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);
  
  