import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

// Validacion de datos.
export function validateSchema(schema, data) {
  const validate = ajv.compile(schema);
  const isValid = validate(data);
  if (!isValid) {
    throw new Error(`Validation failed: ${ajv.errorsText(validate.errors)}`);
  }
  return true;
}