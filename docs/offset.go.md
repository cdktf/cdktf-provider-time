# `offset` Submodule <a name="`offset` Submodule" id="@cdktf/provider-time.offset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Offset <a name="Offset" id="@cdktf/provider-time.offset.Offset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset time_offset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.offset.Offset.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/offset"

offset.NewOffset(scope Construct, id *string, config OffsetConfig) Offset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-time.offset.OffsetConfig">OffsetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-time.offset.OffsetConfig">OffsetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.offset.Offset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-time.offset.Offset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetBaseRfc3339">ResetBaseRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetDays">ResetOffsetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetHours">ResetOffsetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMinutes">ResetOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMonths">ResetOffsetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetSeconds">ResetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetYears">ResetOffsetYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetTriggers">ResetTriggers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-time.offset.Offset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-time.offset.Offset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-time.offset.Offset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.offset.Offset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-time.offset.Offset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-time.offset.Offset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-time.offset.Offset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-time.offset.Offset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.offset.Offset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-time.offset.Offset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-time.offset.Offset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-time.offset.Offset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-time.offset.Offset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-time.offset.Offset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.offset.Offset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-time.offset.Offset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-time.offset.Offset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBaseRfc3339` <a name="ResetBaseRfc3339" id="@cdktf/provider-time.offset.Offset.resetBaseRfc3339"></a>

```go
func ResetBaseRfc3339()
```

##### `ResetOffsetDays` <a name="ResetOffsetDays" id="@cdktf/provider-time.offset.Offset.resetOffsetDays"></a>

```go
func ResetOffsetDays()
```

##### `ResetOffsetHours` <a name="ResetOffsetHours" id="@cdktf/provider-time.offset.Offset.resetOffsetHours"></a>

```go
func ResetOffsetHours()
```

##### `ResetOffsetMinutes` <a name="ResetOffsetMinutes" id="@cdktf/provider-time.offset.Offset.resetOffsetMinutes"></a>

```go
func ResetOffsetMinutes()
```

##### `ResetOffsetMonths` <a name="ResetOffsetMonths" id="@cdktf/provider-time.offset.Offset.resetOffsetMonths"></a>

```go
func ResetOffsetMonths()
```

##### `ResetOffsetSeconds` <a name="ResetOffsetSeconds" id="@cdktf/provider-time.offset.Offset.resetOffsetSeconds"></a>

```go
func ResetOffsetSeconds()
```

##### `ResetOffsetYears` <a name="ResetOffsetYears" id="@cdktf/provider-time.offset.Offset.resetOffsetYears"></a>

```go
func ResetOffsetYears()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-time.offset.Offset.resetTriggers"></a>

```go
func ResetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-time.offset.Offset.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/offset"

offset.Offset_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-time.offset.Offset.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/offset"

offset.Offset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-time.offset.Offset.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/offset"

offset.Offset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-time.offset.Offset.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/offset"

offset.Offset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Offset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Offset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Offset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.rfc3339">Rfc3339</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.second">Second</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.unix">Unix</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339Input">BaseRfc3339Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDaysInput">OffsetDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHoursInput">OffsetHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutesInput">OffsetMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonthsInput">OffsetMonthsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSecondsInput">OffsetSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYearsInput">OffsetYearsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggersInput">TriggersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339">BaseRfc3339</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDays">OffsetDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHours">OffsetHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutes">OffsetMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonths">OffsetMonths</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSeconds">OffsetSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYears">OffsetYears</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-time.offset.Offset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-time.offset.Offset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-time.offset.Offset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-time.offset.Offset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-time.offset.Offset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-time.offset.Offset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.offset.Offset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.offset.Offset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.offset.Offset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.offset.Offset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.offset.Offset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.offset.Offset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.offset.Offset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-time.offset.Offset.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-time.offset.Offset.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-time.offset.Offset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-time.offset.Offset.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-time.offset.Offset.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Rfc3339`<sup>Required</sup> <a name="Rfc3339" id="@cdktf/provider-time.offset.Offset.property.rfc3339"></a>

```go
func Rfc3339() *string
```

- *Type:* *string

---

##### `Second`<sup>Required</sup> <a name="Second" id="@cdktf/provider-time.offset.Offset.property.second"></a>

```go
func Second() *f64
```

- *Type:* *f64

---

##### `Unix`<sup>Required</sup> <a name="Unix" id="@cdktf/provider-time.offset.Offset.property.unix"></a>

```go
func Unix() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-time.offset.Offset.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `BaseRfc3339Input`<sup>Optional</sup> <a name="BaseRfc3339Input" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339Input"></a>

```go
func BaseRfc3339Input() *string
```

- *Type:* *string

---

##### `OffsetDaysInput`<sup>Optional</sup> <a name="OffsetDaysInput" id="@cdktf/provider-time.offset.Offset.property.offsetDaysInput"></a>

```go
func OffsetDaysInput() *f64
```

- *Type:* *f64

---

##### `OffsetHoursInput`<sup>Optional</sup> <a name="OffsetHoursInput" id="@cdktf/provider-time.offset.Offset.property.offsetHoursInput"></a>

```go
func OffsetHoursInput() *f64
```

- *Type:* *f64

---

##### `OffsetMinutesInput`<sup>Optional</sup> <a name="OffsetMinutesInput" id="@cdktf/provider-time.offset.Offset.property.offsetMinutesInput"></a>

```go
func OffsetMinutesInput() *f64
```

- *Type:* *f64

---

##### `OffsetMonthsInput`<sup>Optional</sup> <a name="OffsetMonthsInput" id="@cdktf/provider-time.offset.Offset.property.offsetMonthsInput"></a>

```go
func OffsetMonthsInput() *f64
```

- *Type:* *f64

---

##### `OffsetSecondsInput`<sup>Optional</sup> <a name="OffsetSecondsInput" id="@cdktf/provider-time.offset.Offset.property.offsetSecondsInput"></a>

```go
func OffsetSecondsInput() *f64
```

- *Type:* *f64

---

##### `OffsetYearsInput`<sup>Optional</sup> <a name="OffsetYearsInput" id="@cdktf/provider-time.offset.Offset.property.offsetYearsInput"></a>

```go
func OffsetYearsInput() *f64
```

- *Type:* *f64

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-time.offset.Offset.property.triggersInput"></a>

```go
func TriggersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BaseRfc3339`<sup>Required</sup> <a name="BaseRfc3339" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339"></a>

```go
func BaseRfc3339() *string
```

- *Type:* *string

---

##### `OffsetDays`<sup>Required</sup> <a name="OffsetDays" id="@cdktf/provider-time.offset.Offset.property.offsetDays"></a>

```go
func OffsetDays() *f64
```

- *Type:* *f64

---

##### `OffsetHours`<sup>Required</sup> <a name="OffsetHours" id="@cdktf/provider-time.offset.Offset.property.offsetHours"></a>

```go
func OffsetHours() *f64
```

- *Type:* *f64

---

##### `OffsetMinutes`<sup>Required</sup> <a name="OffsetMinutes" id="@cdktf/provider-time.offset.Offset.property.offsetMinutes"></a>

```go
func OffsetMinutes() *f64
```

- *Type:* *f64

---

##### `OffsetMonths`<sup>Required</sup> <a name="OffsetMonths" id="@cdktf/provider-time.offset.Offset.property.offsetMonths"></a>

```go
func OffsetMonths() *f64
```

- *Type:* *f64

---

##### `OffsetSeconds`<sup>Required</sup> <a name="OffsetSeconds" id="@cdktf/provider-time.offset.Offset.property.offsetSeconds"></a>

```go
func OffsetSeconds() *f64
```

- *Type:* *f64

---

##### `OffsetYears`<sup>Required</sup> <a name="OffsetYears" id="@cdktf/provider-time.offset.Offset.property.offsetYears"></a>

```go
func OffsetYears() *f64
```

- *Type:* *f64

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-time.offset.Offset.property.triggers"></a>

```go
func Triggers() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-time.offset.Offset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OffsetConfig <a name="OffsetConfig" id="@cdktf/provider-time.offset.OffsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.offset.OffsetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-time-go/time/offset"

&offset.OffsetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaseRfc3339: *string,
	OffsetDays: *f64,
	OffsetHours: *f64,
	OffsetMinutes: *f64,
	OffsetMonths: *f64,
	OffsetSeconds: *f64,
	OffsetYears: *f64,
	Triggers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339">BaseRfc3339</a></code> | <code>*string</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetDays">OffsetDays</a></code> | <code>*f64</code> | Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetHours">OffsetHours</a></code> | <code>*f64</code> | Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes">OffsetMinutes</a></code> | <code>*f64</code> | Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths">OffsetMonths</a></code> | <code>*f64</code> | Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds">OffsetSeconds</a></code> | <code>*f64</code> | Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetYears">OffsetYears</a></code> | <code>*f64</code> | Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.triggers">Triggers</a></code> | <code>*map[string]*string</code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-time.offset.OffsetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-time.offset.OffsetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-time.offset.OffsetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-time.offset.OffsetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-time.offset.OffsetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-time.offset.OffsetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-time.offset.OffsetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseRfc3339`<sup>Optional</sup> <a name="BaseRfc3339" id="@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339"></a>

```go
BaseRfc3339 *string
```

- *Type:* *string

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#base_rfc3339 Offset#base_rfc3339}

---

##### `OffsetDays`<sup>Optional</sup> <a name="OffsetDays" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetDays"></a>

```go
OffsetDays *f64
```

- *Type:* *f64

Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#offset_days Offset#offset_days}

---

##### `OffsetHours`<sup>Optional</sup> <a name="OffsetHours" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetHours"></a>

```go
OffsetHours *f64
```

- *Type:* *f64

Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#offset_hours Offset#offset_hours}

---

##### `OffsetMinutes`<sup>Optional</sup> <a name="OffsetMinutes" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes"></a>

```go
OffsetMinutes *f64
```

- *Type:* *f64

Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#offset_minutes Offset#offset_minutes}

---

##### `OffsetMonths`<sup>Optional</sup> <a name="OffsetMonths" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths"></a>

```go
OffsetMonths *f64
```

- *Type:* *f64

Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#offset_months Offset#offset_months}

---

##### `OffsetSeconds`<sup>Optional</sup> <a name="OffsetSeconds" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds"></a>

```go
OffsetSeconds *f64
```

- *Type:* *f64

Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#offset_seconds Offset#offset_seconds}

---

##### `OffsetYears`<sup>Optional</sup> <a name="OffsetYears" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetYears"></a>

```go
OffsetYears *f64
```

- *Type:* *f64

Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#offset_years Offset#offset_years}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-time.offset.OffsetConfig.property.triggers"></a>

```go
Triggers *map[string]*string
```

- *Type:* *map[string]*string

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.10.0/docs/resources/offset#triggers Offset#triggers}

---



