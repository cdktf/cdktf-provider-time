# `offset` Submodule <a name="`offset` Submodule" id="@cdktf/provider-time.offset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Offset <a name="Offset" id="@cdktf/provider-time.offset.Offset"></a>

Represents a {@link https://www.terraform.io/docs/providers/time/r/offset time_offset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.offset.Offset.Initializer"></a>

```python
from cdktf_cdktf_provider_time import offset

offset.Offset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_rfc3339: str = None,
  offset_days: typing.Union[int, float] = None,
  offset_hours: typing.Union[int, float] = None,
  offset_minutes: typing.Union[int, float] = None,
  offset_months: typing.Union[int, float] = None,
  offset_seconds: typing.Union[int, float] = None,
  offset_years: typing.Union[int, float] = None,
  triggers: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.baseRfc3339">base_rfc3339</a></code> | <code>str</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetDays">offset_days</a></code> | <code>typing.Union[int, float]</code> | Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetHours">offset_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetMinutes">offset_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetMonths">offset_months</a></code> | <code>typing.Union[int, float]</code> | Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetSeconds">offset_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetYears">offset_years</a></code> | <code>typing.Union[int, float]</code> | Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_rfc3339`<sup>Optional</sup> <a name="base_rfc3339" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.baseRfc3339"></a>

- *Type:* str

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#base_rfc3339 Offset#base_rfc3339}

---

##### `offset_days`<sup>Optional</sup> <a name="offset_days" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetDays"></a>

- *Type:* typing.Union[int, float]

Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_days Offset#offset_days}

---

##### `offset_hours`<sup>Optional</sup> <a name="offset_hours" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetHours"></a>

- *Type:* typing.Union[int, float]

Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_hours Offset#offset_hours}

---

##### `offset_minutes`<sup>Optional</sup> <a name="offset_minutes" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetMinutes"></a>

- *Type:* typing.Union[int, float]

Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_minutes Offset#offset_minutes}

---

##### `offset_months`<sup>Optional</sup> <a name="offset_months" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetMonths"></a>

- *Type:* typing.Union[int, float]

Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_months Offset#offset_months}

---

##### `offset_seconds`<sup>Optional</sup> <a name="offset_seconds" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetSeconds"></a>

- *Type:* typing.Union[int, float]

Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_seconds Offset#offset_seconds}

---

##### `offset_years`<sup>Optional</sup> <a name="offset_years" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetYears"></a>

- *Type:* typing.Union[int, float]

Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_years Offset#offset_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.triggers"></a>

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#triggers Offset#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.offset.Offset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.offset.Offset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetBaseRfc3339">reset_base_rfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetDays">reset_offset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetHours">reset_offset_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMinutes">reset_offset_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMonths">reset_offset_months</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetSeconds">reset_offset_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetYears">reset_offset_years</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetTriggers">reset_triggers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-time.offset.Offset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-time.offset.Offset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-time.offset.Offset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-time.offset.Offset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-time.offset.Offset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-time.offset.Offset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-time.offset.Offset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-time.offset.Offset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_base_rfc3339` <a name="reset_base_rfc3339" id="@cdktf/provider-time.offset.Offset.resetBaseRfc3339"></a>

```python
def reset_base_rfc3339() -> None
```

##### `reset_offset_days` <a name="reset_offset_days" id="@cdktf/provider-time.offset.Offset.resetOffsetDays"></a>

```python
def reset_offset_days() -> None
```

##### `reset_offset_hours` <a name="reset_offset_hours" id="@cdktf/provider-time.offset.Offset.resetOffsetHours"></a>

```python
def reset_offset_hours() -> None
```

##### `reset_offset_minutes` <a name="reset_offset_minutes" id="@cdktf/provider-time.offset.Offset.resetOffsetMinutes"></a>

```python
def reset_offset_minutes() -> None
```

##### `reset_offset_months` <a name="reset_offset_months" id="@cdktf/provider-time.offset.Offset.resetOffsetMonths"></a>

```python
def reset_offset_months() -> None
```

##### `reset_offset_seconds` <a name="reset_offset_seconds" id="@cdktf/provider-time.offset.Offset.resetOffsetSeconds"></a>

```python
def reset_offset_seconds() -> None
```

##### `reset_offset_years` <a name="reset_offset_years" id="@cdktf/provider-time.offset.Offset.resetOffsetYears"></a>

```python
def reset_offset_years() -> None
```

##### `reset_triggers` <a name="reset_triggers" id="@cdktf/provider-time.offset.Offset.resetTriggers"></a>

```python
def reset_triggers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-time.offset.Offset.isConstruct"></a>

```python
from cdktf_cdktf_provider_time import offset

offset.Offset.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-time.offset.Offset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_time import offset

offset.Offset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-time.offset.Offset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_time import offset

offset.Offset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.hour">hour</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.minute">minute</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.rfc3339">rfc3339</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.second">second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.unix">unix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339Input">base_rfc3339_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDaysInput">offset_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHoursInput">offset_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutesInput">offset_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonthsInput">offset_months_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSecondsInput">offset_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYearsInput">offset_years_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggersInput">triggers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339">base_rfc3339</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDays">offset_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHours">offset_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutes">offset_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonths">offset_months</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSeconds">offset_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYears">offset_years</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.offset.Offset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-time.offset.Offset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.offset.Offset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-time.offset.Offset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-time.offset.Offset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-time.offset.Offset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.offset.Offset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.offset.Offset.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.offset.Offset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.offset.Offset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.offset.Offset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.offset.Offset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.offset.Offset.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.offset.Offset.property.hour"></a>

```python
hour: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.offset.Offset.property.minute"></a>

```python
minute: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.offset.Offset.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.offset.Offset.property.rfc3339"></a>

```python
rfc3339: str
```

- *Type:* str

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.offset.Offset.property.second"></a>

```python
second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.offset.Offset.property.unix"></a>

```python
unix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.offset.Offset.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_rfc3339_input`<sup>Optional</sup> <a name="base_rfc3339_input" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339Input"></a>

```python
base_rfc3339_input: str
```

- *Type:* str

---

##### `offset_days_input`<sup>Optional</sup> <a name="offset_days_input" id="@cdktf/provider-time.offset.Offset.property.offsetDaysInput"></a>

```python
offset_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_hours_input`<sup>Optional</sup> <a name="offset_hours_input" id="@cdktf/provider-time.offset.Offset.property.offsetHoursInput"></a>

```python
offset_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_minutes_input`<sup>Optional</sup> <a name="offset_minutes_input" id="@cdktf/provider-time.offset.Offset.property.offsetMinutesInput"></a>

```python
offset_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_months_input`<sup>Optional</sup> <a name="offset_months_input" id="@cdktf/provider-time.offset.Offset.property.offsetMonthsInput"></a>

```python
offset_months_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_seconds_input`<sup>Optional</sup> <a name="offset_seconds_input" id="@cdktf/provider-time.offset.Offset.property.offsetSecondsInput"></a>

```python
offset_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_years_input`<sup>Optional</sup> <a name="offset_years_input" id="@cdktf/provider-time.offset.Offset.property.offsetYearsInput"></a>

```python
offset_years_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `triggers_input`<sup>Optional</sup> <a name="triggers_input" id="@cdktf/provider-time.offset.Offset.property.triggersInput"></a>

```python
triggers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `base_rfc3339`<sup>Required</sup> <a name="base_rfc3339" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339"></a>

```python
base_rfc3339: str
```

- *Type:* str

---

##### `offset_days`<sup>Required</sup> <a name="offset_days" id="@cdktf/provider-time.offset.Offset.property.offsetDays"></a>

```python
offset_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_hours`<sup>Required</sup> <a name="offset_hours" id="@cdktf/provider-time.offset.Offset.property.offsetHours"></a>

```python
offset_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_minutes`<sup>Required</sup> <a name="offset_minutes" id="@cdktf/provider-time.offset.Offset.property.offsetMinutes"></a>

```python
offset_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_months`<sup>Required</sup> <a name="offset_months" id="@cdktf/provider-time.offset.Offset.property.offsetMonths"></a>

```python
offset_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_seconds`<sup>Required</sup> <a name="offset_seconds" id="@cdktf/provider-time.offset.Offset.property.offsetSeconds"></a>

```python
offset_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `offset_years`<sup>Required</sup> <a name="offset_years" id="@cdktf/provider-time.offset.Offset.property.offsetYears"></a>

```python
offset_years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.offset.Offset.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.offset.Offset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OffsetConfig <a name="OffsetConfig" id="@cdktf/provider-time.offset.OffsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.offset.OffsetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_time import offset

offset.OffsetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  base_rfc3339: str = None,
  offset_days: typing.Union[int, float] = None,
  offset_hours: typing.Union[int, float] = None,
  offset_minutes: typing.Union[int, float] = None,
  offset_months: typing.Union[int, float] = None,
  offset_seconds: typing.Union[int, float] = None,
  offset_years: typing.Union[int, float] = None,
  triggers: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339">base_rfc3339</a></code> | <code>str</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetDays">offset_days</a></code> | <code>typing.Union[int, float]</code> | Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetHours">offset_hours</a></code> | <code>typing.Union[int, float]</code> | Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes">offset_minutes</a></code> | <code>typing.Union[int, float]</code> | Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths">offset_months</a></code> | <code>typing.Union[int, float]</code> | Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds">offset_seconds</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetYears">offset_years</a></code> | <code>typing.Union[int, float]</code> | Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.triggers">triggers</a></code> | <code>typing.Mapping[str]</code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.offset.OffsetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.offset.OffsetConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-time.offset.OffsetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-time.offset.OffsetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.offset.OffsetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.OffsetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.offset.OffsetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `base_rfc3339`<sup>Optional</sup> <a name="base_rfc3339" id="@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339"></a>

```python
base_rfc3339: str
```

- *Type:* str

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#base_rfc3339 Offset#base_rfc3339}

---

##### `offset_days`<sup>Optional</sup> <a name="offset_days" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetDays"></a>

```python
offset_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_days Offset#offset_days}

---

##### `offset_hours`<sup>Optional</sup> <a name="offset_hours" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetHours"></a>

```python
offset_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_hours Offset#offset_hours}

---

##### `offset_minutes`<sup>Optional</sup> <a name="offset_minutes" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes"></a>

```python
offset_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_minutes Offset#offset_minutes}

---

##### `offset_months`<sup>Optional</sup> <a name="offset_months" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths"></a>

```python
offset_months: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_months Offset#offset_months}

---

##### `offset_seconds`<sup>Optional</sup> <a name="offset_seconds" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds"></a>

```python
offset_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_seconds Offset#offset_seconds}

---

##### `offset_years`<sup>Optional</sup> <a name="offset_years" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetYears"></a>

```python
offset_years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#offset_years Offset#offset_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.offset.OffsetConfig.property.triggers"></a>

```python
triggers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset#triggers Offset#triggers}

---



