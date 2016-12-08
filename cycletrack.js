Tangle.formats.dave_dollars = function (value) {
	var string_thing = value.round(0).toString();
	// for (i = 0; len(string_thing); i++) {
	// 	console(i);
	// };
	return "$" + string_thing;
}

function setUpTangle () {

        var element = document.getElementById("example");

        var tangle = new Tangle(element, {
                initialize: function () {

			// Budget numbers
                        this.trips = 12e5; // the minimum should be set by a daily cron job?
                        this.cycle_track_budget = 71e5;
                        this.cost_of_cycletrack = 545e4;
                        this.cost_per_trip = this.cost_of_cycletrack / this.trips;

			// Safety numbers
			this.y2014_benchmark_collisions_per_year = 178;
			this.y2016_collisions_per_year = 140;
			this.cost_per_collision = 1e5;

			// Comparison numbers
			this.cost_of_airport_tunnel = 3e8;
                },
                update: function () {

			// Budget numbers
                        this.percentage_of_pilot_budget = this.cost_of_cycletrack / this.cycle_track_budget;
                        this.percentage_of_budget = this.cost_of_cycletrack / this.cycle_track_budget;
                        this.cost_per_trip = this.cost_of_cycletrack / this.trips;
			
			// Safety numbers
                        this.num_collisions = this.y2014_benchmark_collisions_per_year - this.y2016_collisions_per_year;
			this.total_cost_of_collisions = this.num_collisions * this.cost_per_collision;

			// Comparison numbers
			this.num_airport_tunnel_trips = (this.cost_of_airport_tunnel / this.cost_of_cycletrack ) * this.trips;
			this.airport_tunnel_trips_per_day = this.num_airport_tunnel_trips / (30 * 18); 
                }
        });
}
