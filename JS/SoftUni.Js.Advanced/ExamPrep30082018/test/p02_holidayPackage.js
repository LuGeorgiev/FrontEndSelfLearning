let assert = require('Chai').assert;
const sut = require('../holidayPackageToTest');

describe('Holiday Package', function() {
    let holidayPackage;
    beforeEach(function() {
        holidayPackage = new sut('Italy', 'Summer');
    });
    it('insurance included must have default value false', function() {
        const result = holidayPackage.insuranceIncluded;
        assert.equal(result, false);
    });
    it('show message if no vacationeers added', function() {
        const result = holidayPackage.showVacationers();
        assert.equal(result, 'No vacationers are added yet');
    });
    it('generateHolidayPackage must throw error', function() {
        assert.throws(() => holidayPackage.generateHolidayPackage(), Error, "There must be at least 1 vacationer added")
    });
    it('added vacantioneer is not in correct format and result throws error', function() {
        assert.throws(() => holidayPackage.addVacationer(1), Error, "Vacationer name must be a non-empty string");
    })

    it('added vacantioneer is empty string and result throws error', function() {
        assert.throws(() => holidayPackage.addVacationer(' '), Error, "Vacationer name must be a non-empty string");
    })
    it('added vacantioneer single string and result throws error', function() {
        assert.throws(() => holidayPackage.addVacationer('Ivan'), Error, "Name must consist of first name and last name");
    });
    it('Show vacantioneers must show correct message', function() {
        holidayPackage.addVacationer('Ivan petrov');
        holidayPackage.addVacationer('Pesho petrov');
        assert.equal(holidayPackage.showVacationers(), `Vacationers:\n${'Ivan petrov'}\n${'Pesho petrov'}`)
    });
    it('Generate Holiday packagemust show correct sum for Summer season', function() {
        holidayPackage.addVacationer('Ivan petrov');
        holidayPackage.addVacationer('Pesho petrov');
        assert.equal(holidayPackage.generateHolidayPackage(),
            "Holiday Package Generated\nDestination: Italy\nVacationers:\nIvan petrov\nPesho petrov\nPrice: 1000");
    });
});