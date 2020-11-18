(describe("Api tests", function () {

    it('should test the api', function () {
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.server();
        cy.route({
            method: 'PUT',
            url: 'comments/*',
            status: '404',
            response: {
                error: "Comment does not exist"
            },
            delay: 2000,
        }).as('UpdateComment')
        cy.get('.network-put').click();
        cy.get('.network-put-comment').should('contain', 'does not exist')

    })
    it('should secodn tests', function () {
        cy.request('POST','url',{
            'name':'stefan',

        }).then(function (response) {
            expect(response.body).to.have.property('MSG','success');


        })

    });
}));
