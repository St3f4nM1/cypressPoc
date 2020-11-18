class FlighSearchPage {


    getLogo() {
        return cy.get('[data-test="header-logo"]');
    }

    getFlightSearch() {
        return cy.get('[data-test="flight-search"]');
    }

    getOriginField() {
        return cy.get('[id="search-departure-station"]');
    }

    getDestinationField() {
        return cy.get('[id="search-arrival-station"]');
    }


}

export default FlighSearchPage
