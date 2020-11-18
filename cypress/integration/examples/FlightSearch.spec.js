import FlightSearchPage from '../pageObjects/FlighSearchPage'

(describe("My second test class", function () {

    const flightSearchPage = new FlightSearchPage;

    before(function () {
        const flightSearchPage = new FlightSearchPage;
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    });

    it('Can not search flight without destination', function () {
      expect(flightSearchPage.getLogo().to.be.visible())


    })
}));
