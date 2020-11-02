const Hapi = require("@hapi/hapi");
const Vision = require("@hapi/vision");
const Inert = require("@hapi/inert");
const Joi = require("@hapi/joi");
const Path = require("path");
const { Movies } = require("./models");
const { title } = require("process");

const init = async () => {
  // Setting up the server
  const server = Hapi.server({
    port:  process.env.PORT || 8080,
    host: "localhost",
    routes: {
      files: {
        relativeTo: Path.join(__dirname, "public"),
      },
    },
    routes:{
      cors: true,
    }
  });


  // inert middleware
  await server.register(Inert);
  //   vision middlieware
  await server.register(Vision);

  server.validator(Joi);

  server.views({
    engines: {
      html: require("ejs"),
    },
    path: Path.join(__dirname, "public/templates"),
  });

  server.route({
    method: "GET",
    path: "/public/{param*}",
    handler: {
      directory: {
        path: Path.join(__dirname, "public"),
      },
    },
  });

  // The home route
  server.route({
    method: "GET",
    path: "/",
    handler: (request, reply) => {
      return ("I'm up");
    },
  });

  server.route({
    method: "GET",
    path: "/getall",
    handler: async (request, reply) => {
      let results = await Movies.findAll();
      console.log(results)
      return results;
    },
    config: {
      cors: {
          origin: ['*'],
          additionalHeaders: ['cache-control', 'x-requested-with']
      }
    }
  });

  server.route({
    method: "POST",
    path: "/addmovie",
    handler: async (request, reply) => {
      console.log(request.payload);
      movieName = request.payload.title;
      movieGenre = request.payload.genre;
      released = request.payload.datereleased;
      console.log(released);
      await Movies.create({
        title: movieName,
        genre: movieGenre,
        dateReleased: released,
      });
      return {
        success: "Movie added",
      };
    },
    options: {
      validate: {
        payload: {
          title: Joi.string().min(1).required(),
          genre: Joi.string().min(1).required(),
          datereleased: Joi.date().required(),
        },
      },
    },
  });

  server.route({
    method: "GET",
    path: "/deletemovie/{id}",
    handler: async (request, reply) => {
      movieId = request.params.id;
      const movie = await Movies.findOne({
        where: {
          id: movieId,
        },
      });
      console.log(movie);
      if (movie) {
        await movie.destroy();
        return {
          success: "Movie deleted",
        };
      } else {
        return {
          error: "Movie not found",
        };
      }
    },
    // options: {
    //   validate: {
    //     params: {
    //       id : Joi.string().guid({ version : 'uuidv4' })
    //     },
    //   },
    // },
    config: {
      cors: {
          origin: ['*'],
          additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    
  });

  server.route({
    method: ["POST"],
    path: "/updatemovie",
    handler: async (request, reply) => {
      console.log(request.payload);
      movieId = request.payload.id;
      updatedGenre = request.payload.genre;
      updatedDate = request.payload.datereleased;
      updatedTitle = request.payload.title;
      const movie = await Movies.findOne({
        where: {
          id: movieId,
        },
      });

      if (movie) {
        await movie.update({
          genre: updatedGenre,
          dateReleased: updatedDate,
          title: updatedTitle,
        });
        return {
          success: "Details updated successfully",
        };
      } else {
        return {
          error: "Movie not found",
        };
      }
    },
    // options: {
    //   validate: {
    //     payload: {
    //       title: Joi.string().min(1).required(),
    //       genre: Joi.string().min(1).required(),
    //       datereleased: Joi.date().required(),
    //       id : Joi.string().guid({ version : 'uuidv4' })
    //     },
    //   },
    // },
    config: {
      cors: {
          origin: ['*'],
          additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
  });

  server.route({
    method: ["PUT", "PATCH"],
    path: "/updaterating/{id}/{rating}",
    handler: async (request, reply) => {
      movieId = request.params.id;
      updatedRating = request.params.rating;
      newRatedBy = await Movies.findOne({
        where: {
          id: movieId,
        },
      });
      oldRateNo = newRatedBy.dataValues.ratedBy;
      oldRating = newRatedBy.dataValues.rating;
      equation = Number(oldRateNo * oldRating) + Number(updatedRating);
      newRating = equation / (oldRateNo + 1);
      if (newRatedBy) {
        await newRatedBy.update({
          rating: newRating,
          ratedBy: oldRateNo + 1,
        });
        return {
          success: "Movie rating updated successfully",
        };
      } else {
        return {
          error: "Movie Not found",
        };
      }
    },
    // options: {
    //   validate: {
    //     params: {
    //       rating: Joi.number().min(1).max(5),
    //       id : Joi.string().guid({ version : 'uuidv4' })
    //     },
    //   },
    // },
    config: {
      cors: {
          origin: ['*'],
          additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
  });

  server.route({
    method: "GET",
    path: "/getdetails/{id}",
    handler: async (request, reply) => {
      movieId = request.params.id;
      console.log(movieId);
      const movie = await Movies.findOne({
        where: {
          id: movieId,
        },
      });
      console.log(movie);
      if (movie) {
        return movie;
      } else {
        return { error: "Movie Not found" };
      }
    },
    config: {
      cors: {
          origin: ['*'],
          additionalHeaders: ['cache-control', 'x-requested-with']
      }
    },
    // options: {
    //   validate: {
    //     params: {
    //       id : Joi.string().guid({ version : 'uuidv4' })
    //     },
    //   },
    // },
    
  });

  // Starting the server (Async)
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

// if something is left unhandled by me
process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

// Call the function assigned to the init variable
init();
