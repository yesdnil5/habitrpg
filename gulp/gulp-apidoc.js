import gulp from 'gulp';
import clean from 'rimraf';
import apidoc from 'apidoc';

const APIDOC_DEST_PATH = './website/build/apidoc';
const APIDOC_SRC_PATH = './website/server';
gulp.task('apidoc:clean', (done) => {
  clean(APIDOC_DEST_PATH, done);
});

gulp.task('apidoc', ['apidoc:clean'], (done) => {
  let result = apidoc.createDoc({
    src: APIDOC_SRC_PATH,
    dest: APIDOC_DEST_PATH,
  });

  if (result === false) {
    done(new Error('There was a problem generating apiDoc documentation.'));
  } else {
    done();
  }
});
