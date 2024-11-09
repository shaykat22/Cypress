describe('Login', () => {
    it('passes', () => {
      cy.visit('https://uat-sdg.oss.net.bd/') // Wait for 10 seconds
      cy.wait(3000)

      // Login
      cy.get('div[class="topBtnLogin"]').click()
      cy.get('div>span').contains('System Login').click()
      cy.get('input[id="username"]').type('300000000292')
      cy.get('input[id="password"]').type('123456a@')
      cy.get('input[name="login"]').click()

      //Data entry
      cy.get('a[href="https://uat-sdg.oss.net.bd/indicator-data/create"]').click()
      cy.get('span[id="select2-ind_def_id-container"]').click()
      cy.get('input[type ="search"]').type("1.1.1{enter}")
      cy.get('select[id="def_source_id"]').select('HIES, Bangladesh Bureau of Statistics, Statistics and Informatics Division, Ministry of Planning')
      cy.get('select[id="data_period"]').select('2017')
      cy.get('div > input[type=file]').first().selectFile('E:\\Shaykat\\SDG\\SDG-indicator-metadata\\New folder\\GOAL-1\\Metadata-01-02-02.pdf', {action: 'drag-drop'})
      cy.get('div>input[id=summary_data]').type('10')
      cy.get ('div>button[class="btn btn-primary save_btn"]').click()
      cy.wait(3000)
      cy.get('button[action="send_for_approval"]').last().click();
      cy.wait(3000)
      cy.get('div>div>button>span').click();



    })
  })
