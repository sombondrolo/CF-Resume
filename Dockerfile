# https://docs.astro.build/en/recipes/docker/#creating-a-dockerfile
FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs

# https://docs.astro.build/en/guides/deploy/flyio/
# https://www.npmjs.com/package/@flydotio/dockerfile
# https://github.com/fly-apps/dockerfile-node

# Serve your site in a tiny production container, which serves on port 8043.
# FROM pierrezemb/gostatic
# COPY --from=bridgetown_builder /app/output /srv/http/
# docker run -d -p 8043:8043 astro-fercandia-cv
