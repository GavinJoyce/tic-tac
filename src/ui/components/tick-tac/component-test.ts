import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: tick-tac', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<tick-tac />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
