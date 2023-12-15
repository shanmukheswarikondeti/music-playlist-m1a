import styled from 'styled-components'

export const TrackItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`
export const TrackImg = styled.img`
  width: 150px;
  margin-right: 16px;
`
export const NameText = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  color: #ffffff;
`
export const GenreText = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto';
  color: #3b82f6;
`
export const DurationText = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #ffffff;
  margin-right: 24px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 8px;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
