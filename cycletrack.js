function setUpTangle () {

        var element = document.getElementById("example");

        var tangle = new Tangle(element, {
                initialize: function () {
                        this.trips = 1e6; // the minimum should be set by a daily cron job?
                        this.cycle_track_budget = 75e5;
                        this.cost_of_project = 57e5;
                        this.a_2012_2016_projected_transportation_budget = 21e8;
                        this.a_2012_2016_allocated_cycling_budget = 227e5;
                        this.cost_per_trip = this.cost_of_project / this.trips;
                },
                update: function () {
                        this.percentage_of_pilot_budget = this.cost_of_project / this.cycle_track_budget;
                        this.percentage_of_budget = this.cost_of_project / this.cycle_track_budget;
                        this.cost_per_trip = this.cost_of_project / this.trips;

                }
        });
}
