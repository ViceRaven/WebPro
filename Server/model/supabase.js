/* B"H
 */

const { createClient } = require("@supabase/supabase-js");

module.exports = {
  getConnection() {
    return createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );
  },
};
