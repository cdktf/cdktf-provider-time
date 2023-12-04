# `offset` Submodule <a name="`offset` Submodule" id="@cdktf/provider-time.offset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Offset <a name="Offset" id="@cdktf/provider-time.offset.Offset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset time_offset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-time.offset.Offset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.time.offset.Offset;

Offset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .baseRfc3339(java.lang.String)
//  .offsetDays(java.lang.Number)
//  .offsetHours(java.lang.Number)
//  .offsetMinutes(java.lang.Number)
//  .offsetMonths(java.lang.Number)
//  .offsetSeconds(java.lang.Number)
//  .offsetYears(java.lang.Number)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.baseRfc3339">baseRfc3339</a></code> | <code>java.lang.String</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetDays">offsetDays</a></code> | <code>java.lang.Number</code> | Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetHours">offsetHours</a></code> | <code>java.lang.Number</code> | Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetMinutes">offsetMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetMonths">offsetMonths</a></code> | <code>java.lang.Number</code> | Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetSeconds">offsetSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetYears">offsetYears</a></code> | <code>java.lang.Number</code> | Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.Offset.Initializer.parameter.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseRfc3339`<sup>Optional</sup> <a name="baseRfc3339" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.baseRfc3339"></a>

- *Type:* java.lang.String

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#base_rfc3339 Offset#base_rfc3339}

---

##### `offsetDays`<sup>Optional</sup> <a name="offsetDays" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetDays"></a>

- *Type:* java.lang.Number

Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_days Offset#offset_days}

---

##### `offsetHours`<sup>Optional</sup> <a name="offsetHours" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetHours"></a>

- *Type:* java.lang.Number

Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_hours Offset#offset_hours}

---

##### `offsetMinutes`<sup>Optional</sup> <a name="offsetMinutes" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetMinutes"></a>

- *Type:* java.lang.Number

Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_minutes Offset#offset_minutes}

---

##### `offsetMonths`<sup>Optional</sup> <a name="offsetMonths" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetMonths"></a>

- *Type:* java.lang.Number

Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_months Offset#offset_months}

---

##### `offsetSeconds`<sup>Optional</sup> <a name="offsetSeconds" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetSeconds"></a>

- *Type:* java.lang.Number

Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_seconds Offset#offset_seconds}

---

##### `offsetYears`<sup>Optional</sup> <a name="offsetYears" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.offsetYears"></a>

- *Type:* java.lang.Number

Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_years Offset#offset_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.offset.Offset.Initializer.parameter.triggers"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#triggers Offset#triggers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-time.offset.Offset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-time.offset.Offset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-time.offset.Offset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-time.offset.Offset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetBaseRfc3339">resetBaseRfc3339</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetDays">resetOffsetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetHours">resetOffsetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMinutes">resetOffsetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetMonths">resetOffsetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetSeconds">resetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetOffsetYears">resetOffsetYears</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.resetTriggers">resetTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-time.offset.Offset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-time.offset.Offset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-time.offset.Offset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-time.offset.Offset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-time.offset.Offset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-time.offset.Offset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-time.offset.Offset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-time.offset.Offset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-time.offset.Offset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.offset.Offset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-time.offset.Offset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-time.offset.Offset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-time.offset.Offset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-time.offset.Offset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-time.offset.Offset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-time.offset.Offset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-time.offset.Offset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-time.offset.Offset.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-time.offset.Offset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBaseRfc3339` <a name="resetBaseRfc3339" id="@cdktf/provider-time.offset.Offset.resetBaseRfc3339"></a>

```java
public void resetBaseRfc3339()
```

##### `resetOffsetDays` <a name="resetOffsetDays" id="@cdktf/provider-time.offset.Offset.resetOffsetDays"></a>

```java
public void resetOffsetDays()
```

##### `resetOffsetHours` <a name="resetOffsetHours" id="@cdktf/provider-time.offset.Offset.resetOffsetHours"></a>

```java
public void resetOffsetHours()
```

##### `resetOffsetMinutes` <a name="resetOffsetMinutes" id="@cdktf/provider-time.offset.Offset.resetOffsetMinutes"></a>

```java
public void resetOffsetMinutes()
```

##### `resetOffsetMonths` <a name="resetOffsetMonths" id="@cdktf/provider-time.offset.Offset.resetOffsetMonths"></a>

```java
public void resetOffsetMonths()
```

##### `resetOffsetSeconds` <a name="resetOffsetSeconds" id="@cdktf/provider-time.offset.Offset.resetOffsetSeconds"></a>

```java
public void resetOffsetSeconds()
```

##### `resetOffsetYears` <a name="resetOffsetYears" id="@cdktf/provider-time.offset.Offset.resetOffsetYears"></a>

```java
public void resetOffsetYears()
```

##### `resetTriggers` <a name="resetTriggers" id="@cdktf/provider-time.offset.Offset.resetTriggers"></a>

```java
public void resetTriggers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-time.offset.Offset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.time.offset.Offset;

Offset.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-time.offset.Offset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.time.offset.Offset;

Offset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-time.offset.Offset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.time.offset.Offset;

Offset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-time.offset.Offset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-time.offset.Offset.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.time.offset.Offset;

Offset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Offset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Offset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Offset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Offset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.hour">hour</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.minute">minute</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.rfc3339">rfc3339</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.second">second</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.unix">unix</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339Input">baseRfc3339Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDaysInput">offsetDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHoursInput">offsetHoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutesInput">offsetMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonthsInput">offsetMonthsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSecondsInput">offsetSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYearsInput">offsetYearsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggersInput">triggersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.baseRfc3339">baseRfc3339</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetDays">offsetDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetHours">offsetHours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMinutes">offsetMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetMonths">offsetMonths</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetSeconds">offsetSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.offsetYears">offsetYears</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-time.offset.Offset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-time.offset.Offset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-time.offset.Offset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-time.offset.Offset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-time.offset.Offset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-time.offset.Offset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-time.offset.Offset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.offset.Offset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.offset.Offset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.offset.Offset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.offset.Offset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.offset.Offset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.Offset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.offset.Offset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-time.offset.Offset.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktf/provider-time.offset.Offset.property.hour"></a>

```java
public java.lang.Number getHour();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-time.offset.Offset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minute`<sup>Required</sup> <a name="minute" id="@cdktf/provider-time.offset.Offset.property.minute"></a>

```java
public java.lang.Number getMinute();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-time.offset.Offset.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `rfc3339`<sup>Required</sup> <a name="rfc3339" id="@cdktf/provider-time.offset.Offset.property.rfc3339"></a>

```java
public java.lang.String getRfc3339();
```

- *Type:* java.lang.String

---

##### `second`<sup>Required</sup> <a name="second" id="@cdktf/provider-time.offset.Offset.property.second"></a>

```java
public java.lang.Number getSecond();
```

- *Type:* java.lang.Number

---

##### `unix`<sup>Required</sup> <a name="unix" id="@cdktf/provider-time.offset.Offset.property.unix"></a>

```java
public java.lang.Number getUnix();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-time.offset.Offset.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `baseRfc3339Input`<sup>Optional</sup> <a name="baseRfc3339Input" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339Input"></a>

```java
public java.lang.String getBaseRfc3339Input();
```

- *Type:* java.lang.String

---

##### `offsetDaysInput`<sup>Optional</sup> <a name="offsetDaysInput" id="@cdktf/provider-time.offset.Offset.property.offsetDaysInput"></a>

```java
public java.lang.Number getOffsetDaysInput();
```

- *Type:* java.lang.Number

---

##### `offsetHoursInput`<sup>Optional</sup> <a name="offsetHoursInput" id="@cdktf/provider-time.offset.Offset.property.offsetHoursInput"></a>

```java
public java.lang.Number getOffsetHoursInput();
```

- *Type:* java.lang.Number

---

##### `offsetMinutesInput`<sup>Optional</sup> <a name="offsetMinutesInput" id="@cdktf/provider-time.offset.Offset.property.offsetMinutesInput"></a>

```java
public java.lang.Number getOffsetMinutesInput();
```

- *Type:* java.lang.Number

---

##### `offsetMonthsInput`<sup>Optional</sup> <a name="offsetMonthsInput" id="@cdktf/provider-time.offset.Offset.property.offsetMonthsInput"></a>

```java
public java.lang.Number getOffsetMonthsInput();
```

- *Type:* java.lang.Number

---

##### `offsetSecondsInput`<sup>Optional</sup> <a name="offsetSecondsInput" id="@cdktf/provider-time.offset.Offset.property.offsetSecondsInput"></a>

```java
public java.lang.Number getOffsetSecondsInput();
```

- *Type:* java.lang.Number

---

##### `offsetYearsInput`<sup>Optional</sup> <a name="offsetYearsInput" id="@cdktf/provider-time.offset.Offset.property.offsetYearsInput"></a>

```java
public java.lang.Number getOffsetYearsInput();
```

- *Type:* java.lang.Number

---

##### `triggersInput`<sup>Optional</sup> <a name="triggersInput" id="@cdktf/provider-time.offset.Offset.property.triggersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `baseRfc3339`<sup>Required</sup> <a name="baseRfc3339" id="@cdktf/provider-time.offset.Offset.property.baseRfc3339"></a>

```java
public java.lang.String getBaseRfc3339();
```

- *Type:* java.lang.String

---

##### `offsetDays`<sup>Required</sup> <a name="offsetDays" id="@cdktf/provider-time.offset.Offset.property.offsetDays"></a>

```java
public java.lang.Number getOffsetDays();
```

- *Type:* java.lang.Number

---

##### `offsetHours`<sup>Required</sup> <a name="offsetHours" id="@cdktf/provider-time.offset.Offset.property.offsetHours"></a>

```java
public java.lang.Number getOffsetHours();
```

- *Type:* java.lang.Number

---

##### `offsetMinutes`<sup>Required</sup> <a name="offsetMinutes" id="@cdktf/provider-time.offset.Offset.property.offsetMinutes"></a>

```java
public java.lang.Number getOffsetMinutes();
```

- *Type:* java.lang.Number

---

##### `offsetMonths`<sup>Required</sup> <a name="offsetMonths" id="@cdktf/provider-time.offset.Offset.property.offsetMonths"></a>

```java
public java.lang.Number getOffsetMonths();
```

- *Type:* java.lang.Number

---

##### `offsetSeconds`<sup>Required</sup> <a name="offsetSeconds" id="@cdktf/provider-time.offset.Offset.property.offsetSeconds"></a>

```java
public java.lang.Number getOffsetSeconds();
```

- *Type:* java.lang.Number

---

##### `offsetYears`<sup>Required</sup> <a name="offsetYears" id="@cdktf/provider-time.offset.Offset.property.offsetYears"></a>

```java
public java.lang.Number getOffsetYears();
```

- *Type:* java.lang.Number

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/provider-time.offset.Offset.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.Offset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-time.offset.Offset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OffsetConfig <a name="OffsetConfig" id="@cdktf/provider-time.offset.OffsetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-time.offset.OffsetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.time.offset.OffsetConfig;

OffsetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .baseRfc3339(java.lang.String)
//  .offsetDays(java.lang.Number)
//  .offsetHours(java.lang.Number)
//  .offsetMinutes(java.lang.Number)
//  .offsetMonths(java.lang.Number)
//  .offsetSeconds(java.lang.Number)
//  .offsetYears(java.lang.Number)
//  .triggers(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339">baseRfc3339</a></code> | <code>java.lang.String</code> | Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetDays">offsetDays</a></code> | <code>java.lang.Number</code> | Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetHours">offsetHours</a></code> | <code>java.lang.Number</code> | Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes">offsetMinutes</a></code> | <code>java.lang.Number</code> | Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths">offsetMonths</a></code> | <code>java.lang.Number</code> | Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds">offsetSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.offsetYears">offsetYears</a></code> | <code>java.lang.Number</code> | Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured. |
| <code><a href="#@cdktf/provider-time.offset.OffsetConfig.property.triggers">triggers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-time.offset.OffsetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-time.offset.OffsetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-time.offset.OffsetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-time.offset.OffsetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-time.offset.OffsetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-time.offset.OffsetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-time.offset.OffsetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `baseRfc3339`<sup>Optional</sup> <a name="baseRfc3339" id="@cdktf/provider-time.offset.OffsetConfig.property.baseRfc3339"></a>

```java
public java.lang.String getBaseRfc3339();
```

- *Type:* java.lang.String

Base timestamp in [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`). Defaults to the current time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#base_rfc3339 Offset#base_rfc3339}

---

##### `offsetDays`<sup>Optional</sup> <a name="offsetDays" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetDays"></a>

```java
public java.lang.Number getOffsetDays();
```

- *Type:* java.lang.Number

Number of days to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_days Offset#offset_days}

---

##### `offsetHours`<sup>Optional</sup> <a name="offsetHours" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetHours"></a>

```java
public java.lang.Number getOffsetHours();
```

- *Type:* java.lang.Number

Number of hours to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_hours Offset#offset_hours}

---

##### `offsetMinutes`<sup>Optional</sup> <a name="offsetMinutes" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMinutes"></a>

```java
public java.lang.Number getOffsetMinutes();
```

- *Type:* java.lang.Number

Number of minutes to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_minutes Offset#offset_minutes}

---

##### `offsetMonths`<sup>Optional</sup> <a name="offsetMonths" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetMonths"></a>

```java
public java.lang.Number getOffsetMonths();
```

- *Type:* java.lang.Number

Number of months to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_months Offset#offset_months}

---

##### `offsetSeconds`<sup>Optional</sup> <a name="offsetSeconds" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetSeconds"></a>

```java
public java.lang.Number getOffsetSeconds();
```

- *Type:* java.lang.Number

Number of seconds to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_seconds Offset#offset_seconds}

---

##### `offsetYears`<sup>Optional</sup> <a name="offsetYears" id="@cdktf/provider-time.offset.OffsetConfig.property.offsetYears"></a>

```java
public java.lang.Number getOffsetYears();
```

- *Type:* java.lang.Number

Number of years to offset the base timestamp. At least one of the 'offset_' arguments must be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#offset_years Offset#offset_years}

---

##### `triggers`<sup>Optional</sup> <a name="triggers" id="@cdktf/provider-time.offset.OffsetConfig.property.triggers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTriggers();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Arbitrary map of values that, when changed, will trigger a new base timestamp value to be saved.

See [the main provider documentation](../index.md) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.9.1/docs/resources/offset#triggers Offset#triggers}

---



