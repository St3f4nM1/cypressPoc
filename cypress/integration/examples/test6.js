import HomePage from '../pageObjects/HomePage'

(describe("My second test class", function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
        })
    });

    it('My second test case', function () {
        var sum = 0;
        Cypress.config('defaultCommandTimeOut', 8000);
        const homePage = new HomePage();
        cy.visit(Cypress.env('url'));
        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getShopTab().click();
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element)
        });
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const actualText = $el.text();
            var res = actualText.split(' ');
            res = res[1].trim();
            sum = Number(sum) + Number(res);
        }).then(function () {
            cy.log(sum);
        })

        // cy.get(':nth-child(4) > :nth-child(5) > .btn').click();
        // cy.get('#country').type('India');
        // cy.get('.suggestions > ul > li > a').click();
        // cy.get('[for=checkbox2]').click();
        // cy.get('.ng-untouched > .btn').click();
        // cy.get('.alert').then(function (element) {
        //     const actualText = element.text();
        //     expect(actualText.includes('Success')).to.be.true;
        //
        // })

    })
}));
