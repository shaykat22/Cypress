class DataEntry 
{
    dataEntry = 'a[href="https://uat-sdg.oss.net.bd/indicator-data/create"]'
    clickIndicators = 'span[id="select2-ind_def_id-container"]'
    selectIndicator = 'input[type ="search"]'
    source = 'select[id="def_source_id"]'
    dataPeriod = 'select[id="data_period"]'
    metadata = 'div > input[type=file]'
    summaryData = 'div>input[id=summary_data]'
    save = 'div>button[class="btn btn-primary save_btn"]'

    clickDataEntry()
    {
        cy.get(this.dataEntry).click()
    }
    clickIndicator()
    {
        cy.get(this.clickIndicators).click()
    }
    
    typeIndicator(selectIndicator)
    {
        cy.get(this.selectIndicator).type(selectIndicator)
    }

    selectSource()
    {
        cy.get(this.source).select('HIES, Bangladesh Bureau of Statistics, Statistics and Informatics Division, Ministry of Planning')
    }
    selectDataPeriod()
    {
        cy.get(this.dataPeriod).select('2017')
    }
    selectMetaData()
    {
        cy.get(this.metadata).first().selectFile('E:\\Shaykat\\SDG\\SDG-indicator-metadata\\New folder\\GOAL-1\\Metadata-01-02-02.pdf', {action: 'drag-drop'})
    }
    enterSummaryData(summaryData)
    {
        cy.get(this.summaryData).type(summaryData)
    }
    saveData()
    {
        cy.get (this.save).click()
    }
    
    
   

    // cy.get('button[action="send_for_approval"]').last().click();
    // cy.wait(3000)
    // cy.get('div>div>button>span').click();

}
module.exports = new DataEntry