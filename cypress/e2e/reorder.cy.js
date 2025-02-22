describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });

  it('페이지 접속시 카카오 주식이 보여야 함', ()=> {
    cy.wait(1000);
    cy.get('h1').should('contain', '카카오 주식');
  });

  it('should add a new todo and display it in the "todo" column', () => {
    //NOTE: https://dev.to/samelawrence/how-i-implement-drag-and-drop-in-my-cypress-tests-ppg
    

    // textarea에 텍스트 입력
    cy.get('[data-testid="todo-input"]').type('New Task');

    // Add 버튼 클릭
    cy.contains('button', 'Add').click();

    // 새로운 항목이 todo 리스트에 추가되었는지 확인
    cy.get('[data-rbd-droppable-id="todo"]') // Column 컴포넌트의 droppable ID에 따라 선택
      .should('contain.text', 'New Task'); // 새로 추가된 텍스트가 있는지 확인

    cy.get('[data-rbd-draggable-id="New Task"]')
    .realMouseDown({ button: 'left', position: 'center' })
    .realMouseMove(0, 10, { position: 'center' })
    .wait(200);
    cy.get('[data-rbd-droppable-id="doing"]')
    .realMouseMove(0, 0, { position: 'center' })
    .realMouseUp();
    cy.get('[data-rbd-droppable-id="doing"]').should('contain.text', 'New Task');
  });
})